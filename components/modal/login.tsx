import { Button, Spinner } from 'flowbite-react'
import React, { useEffect, useState } from 'react'
import {HiOutlineMail} from 'react-icons/hi'
import {AiOutlineEye, AiOutlineEyeInvisible} from 'react-icons/ai'
import { useSetRecoilState } from 'recoil'
import { useAuthModalState } from '@/recoil/useAuthModalAtom'
import { useSignInWithEmailAndPassword, useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '@/firebase/firebase.config'
import GoogleButton from './googleButton'
import Cookies from 'js-cookie'

type Props = {}

const Login = (props: Props) => {
  
  const setModalState = useSetRecoilState(useAuthModalState)
    const [showPassword, setShowPassword] = useState<boolean>(false)
    const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")

  
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);

  const submitHandler = async (e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    await signInWithEmailAndPassword(email, password).then((response : any) => {

      Cookies.set("user", JSON.stringify({
        email : response?.user.email,
        displayName : response?.user.displayName,
        uid : response?.user.uid
      }))
      
      setEmail("")
      setPassword("")
    
    setModalState((prev) => ({...prev, open : false}))
    
   }).catch((error) => console.log(error.message))
  
  }


    
  return (
    <form onSubmit={submitHandler} className="flex flex-col flex-grow space-y-4">
      <GoogleButton />
       <div className="relative flex-grow w-full">
            <HiOutlineMail className="text-xl text-gray-500 absolute top-[50%] -translate-y-[50%] left-1" />
        <input onChange={(e) => setEmail(e.target.value)} value={email} required type="email" placeholder='skgroup@email.com' className="flex-grow border p-1 w-full pl-8 rounded" />
        </div>
        <div className="relative flex-grow w-full">
          <span className="text-xl text-gray-500 absolute top-[50%] -translate-y-[50%] left-1 cursor-pointer" onClick={() => setShowPassword(!showPassword)} > {showPassword ? <AiOutlineEyeInvisible/> : <AiOutlineEye/> } </span>
           
        <input onChange={(e) => setPassword(e.target.value)} value={password} required type={showPassword ? "text" : "password"} placeholder='Password' className="flex-grow border p-1 w-full pl-8 rounded" />
        </div>

       {error &&  <p className="text-red-600 text-sm">{error?.message}</p>}

        <p className="text-sm">Reset your <span className=" text-blue-600 cursor-pointer" onClick={() => setModalState((prev) => ({...prev, view : "resetPassword" }))}>password</span></p>

        

        <Button type='submit'>{loading ? <Spinner /> : "Submit"}</Button>


        <p className="text-sm text-center">Create your account <span  className=" text-blue-600 cursor-pointer" onClick={() => setModalState((prev) => ({...prev, view : "signup" }))}>sign up</span></p>
    </form>
  )
}

export default Login