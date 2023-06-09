import MetaSeo from '@/metaSeo/metaSeo'
import Image from 'next/image'
import React, { useState } from 'react'
import Or from './or'
import GoogleButton from './googleButton'
import { useSetRecoilState } from 'recoil'
import { useAuthModalState } from '@/recoil/useAuthModalAtom'

type Props = {}

const Signup = (props: Props) => {
  const setModalState = useSetRecoilState(useAuthModalState)
  const [showPassword, setShoPassword] = useState<boolean>(false)
  return (
    <div>
      <MetaSeo title="Signup | Linkedin " />  
      
      <h1 className="text-4xl text-center mb-5">Make the most of your professional life</h1>
      <form className="flex flex-col space-y-3 max-w-sm bg-white p-5 mx-auto rounded-lg shadow">  
      <Image src="/LinkedIn_Logo.svg" alt='l' width={250} height={120} className="w-32 inline-block lg:hidden"  />         
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
        <p className="text-center text-xs">By clicking Agree & Join, you agree to the LinkedIn <span className="text-blue-700 font-medium">User Agreement, Privacy Policy,</span> and <span className="text-blue-700 font-medium">Cookie Policy.</span></p>
      </div>
      <button type='submit' className="w-full rounded-full py-2 text-lg bg-[#0072b1] text-white hover:bg-blue-800 transition-colors duration-100 focus:ring-4 focus:ring-blue-300 font-medium px-5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Agree & Join</button>
      <Or />
      <GoogleButton />
      <p className="text-center py-3">Already on LinkedIn? <span className="text-blue-700 font-medium cursor-pointer hover:underline" onClick={() => setModalState((prev) => ({...prev, view: "login"}))}>Sign in</span></p>      
    </form>
    <p className="my-5 text-sm text-center">Looking to create a page for a business? <span className="text-blue-700 font-medium cursor-pointer">Get help</span> </p>
    </div>
  )
}

export default Signup