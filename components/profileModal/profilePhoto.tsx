import React, { useState } from 'react'
import Image from 'next/image'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { UserState } from '@/recoil/userAuthAtom'
import { v4 as uuidv4 } from 'uuid';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { auth, firestore, storage } from '@/firebase/firebase.config';
import { doc, updateDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';
import { editProfileState } from '@/recoil/editProfileAtom';
import { Spinner } from 'flowbite-react';
import { useAuthState } from 'react-firebase-hooks/auth';

type Props = {}

const ProfilePhoto = (props: Props) => {
    const [user, userLoading, error] = useAuthState(auth)
    const [currentImg, setCurrentImg] = useState<File>()
    const[loading, setLoading] = useState<boolean>(false)
    const userValue =  useRecoilValue(UserState)
    const setEditProfile = useSetRecoilState(editProfileState)
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

  const uploadeHandler = () => {
    if(!user?.emailVerified){
      return toast("Please verify your email address")
    }
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
            photoURL : downloadURL
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
  setLoading(false)
  }

  return (
    <div>
        <div className="w-full h-60 bg-gray-200 flex items-center">
                <div className=" cursor-pointer w-52 h-52 rounded-full border mx-auto overflow-hidden">
                <Image src={previewImage || userValue.photoURL } width={350} height={350} alt='bg' className="w-full h-full rounded-full object-fill" />
                </div>
        </div>
        <div className="flex items-center space-x-5 justify-end py-5">
           <div>
           <label htmlFor='profilePhoto' className="px-5 py-2 rounded-full border border-blue-600 text-blue-700 font-medium cursor-pointer">Change photo</label>
           <input onChange={chaneHandler} className="hidden" id='profilePhoto' type="file" />
           </div>
            <button type='button' onClick={uploadeHandler} className="px-5 py-2 rounded-full border bg-blue-600 hover:bg-blue-800 text-white font-medium">{loading ? <Spinner /> : "Apply"}</button>
        </div>
    </div>
  )
}

export default ProfilePhoto