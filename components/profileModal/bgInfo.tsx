import React, { ChangeEvent, useState } from 'react'
import Image from 'next/image'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { UserState } from '@/recoil/userAuthAtom'
import UpdateProfileApi from '@/firebaseApi/updateProfileApi'
import { firestore, storage } from '@/firebase/firebase.config'
import { deleteObject, getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage'
import { v4 as uuidv4 } from 'uuid';
import { doc, updateDoc } from 'firebase/firestore'
import { Spinner } from 'flowbite-react'
import { toast } from 'react-toastify'
import { editProfileState } from '@/recoil/editProfileAtom'


type Props = {}

const BgInfo = (props: Props) => {  
  const userValue = useRecoilValue(UserState)
  const setEditProfile = useSetRecoilState(editProfileState)
  const [loading, setLoading] = useState<boolean>(false)
  const [currentImg, setCurrentImg] = useState<File>()
  const [previewImage, setPreivewImage] = useState<string>("")
  const chaneHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = event.target.files as FileList;
    setCurrentImg(selectedFiles?.[0]);
    
   if(selectedFiles[0]){
    setPreivewImage(URL.createObjectURL(selectedFiles?.[0]));
   } else{
    setPreivewImage("")
   }   
  };

  

  const submitHandler = async () => {
    setLoading(true)  
   

      const storageRef = ref(storage, `images/${uuidv4()}`);

    const uploadTask = uploadBytesResumable(storageRef, currentImg as File);

    uploadTask.on('state_changed', 
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
       
      }, 
      (error) => {
       
      }, 
      () => {
        
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          const userDocRef = doc(firestore, `users/${userValue.uid}`)
          updateDoc(userDocRef, {
            bgURL : downloadURL
          }).then(() => {
            toast("Your profile has been updated")
            setEditProfile((prev) => ({
              ...prev,
              open : false
            }))
          })
        });
      }
     
    );   
  }

  return (
   <div>
     <div className="w-full h-40 cursor-pointer bg-gray-200">
      <Image src={previewImage || userValue.bgURL} alt='bg' width={550} height={350} className="w-full h-full object-fill" />
    </div>
    <div className="flex items-center justify-end space-x-5 py-5">
      <div>
        <input accept='image/*' onChange={chaneHandler} className="hidden" type="file" id='bgImage' />
       <label htmlFor="bgImage" className="px-5 py-2 rounded-full border border-blue-600 text-blue-700 font-medium cursor-pointer">      
       Change photo
       </label>
      </div>
      <button onClick={submitHandler} className="px-5 py-2 rounded-full border bg-blue-600 hover:bg-blue-800 text-white font-medium">{loading ? <Spinner /> : "Apply"} </button>
    </div>
   </div>
  )
}

export default BgInfo