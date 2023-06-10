import { auth } from '@/firebase/firebase.config'
import FirebaseAuthApi from '@/firebaseApi/firebaseAuthApi'
import React from 'react'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth'
import {FcGoogle} from 'react-icons/fc'

type Props = {}

const GoogleButton = (props: Props) => {
  const [signInWithGoogle, googleUser, googleLoading, googlError] =
  useSignInWithGoogle(auth);
  return (
    <button onClick={() => signInWithGoogle()} type='button' className=" capitalize flex-grow py-2 rounded-full border border-gray-600 hover:ring-2 ring-gray-400 flex items-center justify-center space-x-1 "><FcGoogle className="text-2xl" /> <span>continue with google</span></button>
  )
}

export default GoogleButton