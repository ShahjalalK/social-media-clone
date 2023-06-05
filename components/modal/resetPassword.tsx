import { useAuthModalState } from '@/recoil/useAuthModalAtom'
import { Button } from 'flowbite-react'
import React from 'react'
import {HiOutlineMail} from 'react-icons/hi'
import { useSetRecoilState } from 'recoil'

type Props = {}

const ResetPassword = (props: Props) => {
  const setModalState = useSetRecoilState(useAuthModalState)
  return (
   <form className="flex flex-grow flex-col space-y-4">
    <div className="relative flex-grow w-full">
            <HiOutlineMail className="text-xl text-gray-500 absolute top-[50%] -translate-y-[50%] left-1" />
        <input type="email" placeholder='skgroup@email.com' className="flex-grow border p-1 w-full pl-8 rounded" />
        </div>
        <Button>Password Reset</Button>
        <p className="text-sm text-gray-400"><span className="text-blue-600 cursor-pointer" onClick={() => setModalState((prev) => ({...prev, view : "login"}))}>Login</span> | <span className="text-blue-600 cursor-pointer" onClick={() => setModalState((prev) => ({...prev, view : "signup"}))}>Signup</span></p>
   </form>

  )
}

export default ResetPassword