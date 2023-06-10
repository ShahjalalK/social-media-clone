import React, { useEffect, useState } from 'react'
import { getStorage, ref, deleteObject, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { firestore, storage } from '@/firebase/firebase.config';

import { v4 as uuidv4 } from 'uuid';
import { useRecoilValue } from 'recoil';
import { UserState } from '@/recoil/userAuthAtom';
import { doc, updateDoc } from 'firebase/firestore';
 
type Props = {}

const UpdateProfileApi = () => {
    const userValue = useRecoilValue(UserState)   
    const [bgImageUrl, setBgUrl] = useState("")

    useEffect(() => {
        const userDocRef = doc(firestore, `users/${userValue.uid as string}`)
        updateDoc(userDocRef, {
            bgURL : bgImageUrl
        })

    }, [bgImageUrl])
   
    const updateBg = async(currentImg : File) => {
        const desertRef = ref(storage, `images/${userValue.bgURL}`); 
        deleteObject(desertRef).then(() => {
           uploadeImage(currentImg)
          }).catch((error) => {
            console.log("ImageDelete Problems")
            uploadeImage(currentImg)
          });  
    }

    const uploadeImage = (currentImg : File) => {
        const storageRef = ref(storage, `images/${uuidv4()}`);

        const uploadTask = uploadBytesResumable(storageRef, currentImg);

        uploadTask.on('state_changed', 
  (snapshot) => {
    // Observe state change events such as progress, pause, and resume
    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    console.log('Upload is ' + progress + '% done');
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
    // Handle unsuccessful uploads
  }, 
  () => {
    // Handle successful uploads on complete
    // For instance, get the download URL: https://firebasestorage.googleapis.com/...
    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        setBgUrl(downloadURL);
    });
  }
);
    }
  return {
    updateBg
  }
}

export default UpdateProfileApi