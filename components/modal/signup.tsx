import { useAuthModalState } from '@/recoil/useAuthModalAtom'
import React, {useEffect, useState} from 'react'
import { useSetRecoilState } from 'recoil'
import {AiOutlineEyeInvisible, AiOutlineEye} from 'react-icons/ai'
import {HiOutlineMail} from 'react-icons/hi'
import { Button, Spinner } from 'flowbite-react'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth'
import { auth, firestore } from '@/firebase/firebase.config'
import { useSendEmailVerification } from 'react-firebase-hooks/auth';
import GoogleButton from './googleButton'
import { doc, getDoc, serverTimestamp, setDoc } from 'firebase/firestore'
import Cookies from 'js-cookie'


type Props = {}



const Signup = (props: Props) => {
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const [confirmShowPassword, setConfirmShowPassword] = useState<boolean>(false)
  const setModalState = useSetRecoilState(useAuthModalState)
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [confirmPassword, setConfirmPassword] = useState<string>("")
  const [error, setError] = useState<string>("")

  const [
    createUserWithEmailAndPassword,
    signupUser,
    loading,
    userError,
  ] = useCreateUserWithEmailAndPassword(auth);

  const [sendEmailVerification, sending, veryFyError] = useSendEmailVerification(
    auth
  );
  

const submitHandler = async (e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError("")
 
  if(password !== confirmPassword){
    setError("Passwrd don't match")
    return
  }

 const res = await createUserWithEmailAndPassword(email, password)
 if(res){
  // sendEmailVerification()
  setEmail("")
  setPassword("")
  setConfirmPassword("")
  setModalState((prev) => ({
    ...prev,
    open : false
  }))

  
 }
 
}

useEffect(() => {
  if(signupUser){
    const docRef = doc(firestore, `users/${signupUser.user.uid}`)
    getDoc(docRef).then((res) => {
      if(res.exists()) {
          return
      }
      setDoc(docRef, {
        uid : signupUser.user.uid,
        displayName : signupUser.user.displayName,
        email : signupUser.user.email,
        photoURL : signupUser.user.photoURL || "https://firebasestorage.googleapis.com/v0/b/blog-82ecc.appspot.com/o/images.png?alt=media&token=f27bb769-5e4d-4ffd-b1da-cb3eb3fbadea&_gl=1*1ynqocm*_ga*NzEyNzYzNy4xNjc2NzAyOTIy*_ga_CW55HF8NVT*MTY4NTkzMDIxNS45OC4xLjE2ODU5MzExNjkuMC4wLjA.",        
        bg : "",
        title : "",
        description : "",
        timestamp: serverTimestamp()
      })
    })
    

    Cookies.set("user", JSON.stringify({
      email : signupUser.user.email,
      uid : signupUser.user.uid
    }))


  }

}, [signupUser])

console.log("signupUser", signupUser)


return (
  <form onSubmit={submitHandler} className="flex flex-col flex-grow space-y-4">
    <GoogleButton />
     <div className="relative flex-grow w-full">
          <HiOutlineMail className="text-xl text-gray-500 absolute top-[50%] -translate-y-[50%] left-1" />
      <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" placeholder='skgroup@email.com' className="flex-grow border p-1 w-full pl-8 rounded" required />
      </div>
      <div className="relative flex-grow w-full">
        <span className="text-xl text-gray-500 absolute top-[50%] -translate-y-[50%] left-1 cursor-pointer" onClick={() => setShowPassword(!showPassword)} > {showPassword ? <AiOutlineEyeInvisible/> : <AiOutlineEye/> } </span>
         
      <input onChange={(e) => setPassword(e.target.value)} value={password} type={showPassword ? "text" : "password"} placeholder='Password' className="flex-grow border p-1 w-full pl-8 rounded" required />
      </div>
      <div className="relative flex-grow w-full">
        <span className="text-xl text-gray-500 absolute top-[50%] -translate-y-[50%] left-1 cursor-pointer" onClick={() => setConfirmShowPassword(!confirmShowPassword)} > {confirmShowPassword ? <AiOutlineEyeInvisible/> : <AiOutlineEye/> } </span>
         
      <input onChange={(e) => setConfirmPassword(e.target.value)} value={confirmPassword} type={confirmShowPassword ? "text" : "password"} placeholder='Password' className="flex-grow border p-1 w-full pl-8 rounded" required />
      </div>

      {error || userError && 
      <div className="text-red-600 text-sm">
        <p className="text-red-600">{error || userError.message}</p>
        </div>}

      
      <Button type='submit'>{loading ? <Spinner /> : "Submit"}</Button>
      <p className="text-sm text-center">Login your account <span  className=" text-blue-600 cursor-pointer" onClick={() => setModalState((prev) => ({...prev, view : "login" }))}>log in</span></p>
  </form>
)
}

export default Signup