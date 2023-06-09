import React, { useState } from 'react'
import Image from 'next/image'
import Or from './or'
import GoogleButton from './googleButton'
import { useSetRecoilState } from 'recoil'
import { useAuthModalState } from '@/recoil/useAuthModalAtom'
import MetaSeo from '@/metaSeo/metaSeo'

type Props = {}

const Login = (props: Props) => {
    const setModalState = useSetRecoilState(useAuthModalState)
    const [showPassword, setShoPassword] = useState<boolean>(false)
  return (
    <form className="drop-shadow rounded-lg p-5 bg-white max-w-sm mx-auto flex flex-col space-y-5">
        <MetaSeo title="Linkedin Login, Signin | Linkedin " />
        <Image src="/LinkedIn_Logo.svg" alt='l' width={250} height={120} className="w-32 inline-block lg:hidden"  />
        <div className="flex flex-col space-y-1">
            <h1 className="text-4xl font-medium">Sign in</h1>
            <p className="text-sm">Stay updated on your professional world</p>
        </div>
        <div className="flex flex-col space-y-1">
        <label htmlFor="email" className="text-sm">Email</label>
        <input id='email' type="email" className="p-1 rounded-lg hover:bg-gray-100 cursor-pointer" required />
      </div>
      <div className="flex flex-col space-y-1">
        <label htmlFor="password" className="text-sm">Password (6 or more characters)
</label>
        <div className="relative w-full">
        <input id="password" type={showPassword ? "text" : "password"} className="p-1 rounded-lg hover:bg-gray-100 cursor-pointer w-full pr-14" required />
        {showPassword ?
         <span className="text-blue-700 font-medium absolute top-[50%] right-3 cursor-pointer -translate-y-[50%]" onClick={() => setShoPassword(false)}>Hide</span> 
         :
        <span className="text-blue-700 font-medium absolute top-[50%] right-3 cursor-pointer -translate-y-[50%]" onClick={() => setShoPassword(true)}>Show</span>
              
      }
        
        </div>
        </div>

       <div>
       <span className="font-medium text-blue-700 hover:bg-blue-200 hover:underline cursor-pointer rounded-full p-1"  onClick={() => setModalState((prev) => ({...prev, view: "resetPassword"}))}>Forgot password?</span>
       </div>

        <button type='submit' className="w-full rounded-full py-2 text-lg bg-[#0072b1] text-white hover:bg-blue-800 transition-colors duration-100 focus:ring-4 focus:ring-blue-300 font-medium px-5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Sign in</button>

        <Or />
        <GoogleButton />

        <p className="text-center py-3">Already on LinkedIn? <span className="text-blue-700 font-medium cursor-pointer hover:underline" onClick={() => setModalState((prev) => ({...prev, view: "signup"}))}>Join now</span></p>  
        
    </form>
  )
}

export default Login