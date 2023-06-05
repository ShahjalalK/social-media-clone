import { auth, firestore } from '@/firebase/firebase.config';
import { useAuthModalState } from '@/recoil/useAuthModalAtom';
import {  doc, getDoc, getDocs, serverTimestamp, setDoc } from 'firebase/firestore';
import Cookies from 'js-cookie';
import React, { useEffect } from 'react'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import {FcGoogle} from 'react-icons/fc'
import { useSetRecoilState } from 'recoil';


type Props = {}

const GoogleButton = (props: Props) => {
    const setModalState = useSetRecoilState(useAuthModalState)
    const [signInWithGoogle, googleUser, loading, error] = useSignInWithGoogle(auth);
    const googleHandler = async () => {
      const res = await signInWithGoogle()
      if(res){
        setModalState((prev) => ({
          ...prev,
          open : false
        }))
      }    
    }
    
useEffect(() => {
if(googleUser){
  const userDocRef = doc(firestore, `users/${googleUser.user.uid as string}`)
 getDoc(userDocRef).then((res) => {
    if(res.exists()){
      return
    }

    setDoc(userDocRef, {
      uid : googleUser.user.uid,
      displayName : googleUser.user.displayName,
      email : googleUser.user.email,
      photoURL : googleUser.user.photoURL || "https://firebasestorage.googleapis.com/v0/b/blog-82ecc.appspot.com/o/images.png?alt=media&token=f27bb769-5e4d-4ffd-b1da-cb3eb3fbadea&_gl=1*1ynqocm*_ga*NzEyNzYzNy4xNjc2NzAyOTIy*_ga_CW55HF8NVT*MTY4NTkzMDIxNS45OC4xLjE2ODU5MzExNjkuMC4wLjA.",
      bg : "",
      title : "",
      description : "",
      timestamp: serverTimestamp()
    })

   })


  Cookies.set("user", JSON.stringify({
    email : googleUser.user.email,
    uid : googleUser.user.uid
  }))
}

}, [googleUser])

  return (
    <button onClick={googleHandler} type='button' className="border py-2 rounded-full flex items-center flex-grow px-3"><FcGoogle className='text-2xl' /> <span className="flex-grow text-center text-sm font-medium">Continue With Google</span> </button>
  )
}

export default GoogleButton