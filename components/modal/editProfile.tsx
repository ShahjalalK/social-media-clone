import { userDataState } from '@/recoil/userAtom'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { useRecoilState, useSetRecoilState } from 'recoil'
import {MdModeEditOutline} from 'react-icons/md'
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage'
import { auth, firestore, storage } from '@/firebase/firebase.config'
import { v4 as uuidv4 } from 'uuid';
import { doc, setDoc } from 'firebase/firestore'
import { toast } from 'react-toastify'
import { useRouter } from 'next/router';
import { Spinner } from 'flowbite-react'
import { useAuthModalState } from '@/recoil/useAuthModalAtom'
import { useUpdateProfile } from 'react-firebase-hooks/auth'

type Props = {}

const metadata = {
  contentType: 'image/jpeg'
};

const EditProfile = (props: Props) => {
  const setModalState = useSetRecoilState(useAuthModalState)
  const [userState, setUserState] = useRecoilState(userDataState)
  const [displayName, setDisplayName] = useState(userState.displayName);
  const [photoURL, setPhotoURL] = useState(userState.photoURL);
  const [updateProfile, updating, error] = useUpdateProfile(auth);
  const [loading, setLoading] = useState<boolean>(false)
  const router = useRouter()
  
  const [bgFile, setBgFile] = useState<File>()

  const [prFile, setPrFile] = useState<File>()


  
  
  const changeHandler = (e : React.ChangeEvent<HTMLInputElement>) => {
      setUserState((prev) => ({
        ...prev,
        [e.target.name] : e.target.value
      }))
  }

  const selectedBgImage = (e : React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files as FileList
    setBgFile(selectedFile?.[0])
    setUserState((prev) => ({
      ...prev,
      bg : selectedFile ? URL.createObjectURL(selectedFile?.[0]) : userState.bg
    }))
  }

  const selectedProfileImage = (e : React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files as FileList
    setPrFile(selectedFile?.[0])
    setUserState((prev) => ({
      ...prev,
      photoURL : selectedFile ? URL.createObjectURL(selectedFile?.[0]) : userState.photoURL
    }))
  }



  const bgUrlAdd = () => {
    const storageRef = ref(storage, `images/${uuidv4()}`);
    const uploadTask = uploadBytesResumable(storageRef, bgFile as File);
    uploadTask.on('state_changed', 
  (snapshot) => {
    // Observe state change events such as progress, pause, and resume
    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
   
    switch (snapshot.state) {
      case 'paused':
        console.log('Upload is paused');
        break;
      case 'running':
        console.log('Upload is running');
        break;
    }
  }, 
  (error : any) => {
    toast("Authentication Error")
  }, 
  () => {
    
    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
      setUserState((prev) => ({
        ...prev,
        bg : downloadURL
      }))
    });
  }
);

  }

    const photoURLAdd = () => {
      const storageRef = ref(storage, `images/${uuidv4()}`);

      const uploadTask = uploadBytesResumable(storageRef, prFile as File);

      uploadTask.on('state_changed', 
  (snapshot) => {
    // Observe state change events such as progress, pause, and resume
    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    
    switch (snapshot.state) {
      case 'paused':
        console.log('Upload is paused');
        break;
      case 'running':
        console.log('Upload is running');
        break;
    }
  }, 
  (error) => {
    toast("Authentication Error")
  }, 
  () => {
    // Handle successful uploads on complete
    // For instance, get the download URL: https://firebasestorage.googleapis.com/...
    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
      setUserState((prev) => ({
        ...prev,
        bg : downloadURL
      }))
    });
  }
);
    }

  

  const submitHandler = async(e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    setLoading(true)
    bgUrlAdd()
    photoURLAdd()

    const success = await updateProfile({ displayName , photoURL });
    if(success){

      const userDocRef = doc(firestore, `users/${userState.uid}`)
  
    await setDoc(userDocRef, userState).then(() => {
        router.push(`/u/${userState.uid}`)
        toast("Your profile updated")
        setModalState((prev) => ({
          ...prev,
          open : false
        }))        

    }).catch((error) => {
      toast("Authentication Error")
    })

    }

    

    setLoading(false)

  }




 

  return (
    <form onSubmit={submitHandler} className="flex-grow flex flex-col space-y-4">
      <div>
        <p className="text-sm text-gray-600">* Indicates required</p>
        <h3 className="text-2xl">Basic info</h3>
      </div>
      <div className="w-full h-24 relative bg-gradient-to-r from-purple-500 to-pink-500">
        <label htmlFor='bg' className="absolute bottom-5 right-5 z-20 text-xl text-blue-600 cursor-pointer bg-white rounded-full p-1 hover:text-gray-600"><MdModeEditOutline /></label>
        <input accept='image/*' onChange={selectedBgImage} type="file" id='bg' className="hidden" />
        {userState.bg && <Image src={userState.bg} width={350} height={120} alt="bg" className=" absolute top-0 left-0 w-full h-full z-10 "  />}
        
      </div>

      <div>
      <div className='rounded-full -mt-12 relative z-20 border inline-flex overflow-hidden border-gray-300 w-20 h-20'>
        <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>
      <label htmlFor='profileImage' className="absolute bottom-5 right-5 z-30 text-xl text-white cursor-pointer rounded-full p-1 hover:text-gray-600"><MdModeEditOutline /></label>
      <input accept='image/*' id="profileImage" onChange={selectedProfileImage} type="file" className="hidden" />
      <Image src={userState.photoURL} alt='p' width={80} height={80} className=" rounded-full absolute top-0 left-0 w-full h-full object-cover" />

      </div>
      </div>


      <div>
        <p className="text-sm text-gray-500">Additional name*</p>
      <input value={userState.displayName as string} name='displayName' onChange={changeHandler} type="text" className="flex-grow p-1 w-full rounded" required />
      </div>

      <div>
        <p className="text-sm text-gray-500">Headline*</p>
        <input type="text" value={userState.title} name='title'  onChange={changeHandler} className="flex-grow p-1 w-full rounded" required />
      </div>

      <div>
        <p className="text-sm text-gray-500">Description</p>
        <textarea value={userState.description} name='description' cols={30} 
        onChange={(e) => {
          setUserState((prev) => ({
            ...prev,
            description : e.target.value
          }))
        }} className="flex-grow p-1 w-full rounded" ></textarea>
      </div>
      <div className="flex justify-end">
      <button type='submit' className="bg-blue-800 text-white rounded-lg px-5 py-1">{loading ? <Spinner /> : "Save"}</button>
      </div>
    </form>
  )
}

export default EditProfile