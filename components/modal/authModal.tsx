import React from 'react'
import { Modal } from 'flowbite-react';
import { useRecoilState } from 'recoil';
import { useAuthModalState } from '@/recoil/useAuthModalAtom';
import Login from './login';
import Image from 'next/image'
import Signup from './signup';
import ResetPassword from './resetPassword';


type Props = {}

const AuthModal = (props: Props) => {
    const [modal, setModal] = useRecoilState(useAuthModalState)
  
  return (
    <div className="container pt-2 pb-5">
      <div className="hidden lg:inline-block">
        <Image src="/LinkedIn_Logo.svg" alt='l' width={250} height={120} className="w-32"  />
      </div>

      {modal.view === "signup" && <Signup />}
      {modal.view === "login" && <Login />}
      {modal.view === "resetPassword" && <ResetPassword />}
    </div>

  )
}

export default AuthModal