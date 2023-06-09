import React from 'react'
import { Modal } from 'flowbite-react';
import { useRecoilState } from 'recoil';
import { useAuthModalState } from '@/recoil/useAuthModalAtom';
import Login from './login';
import Image from 'next/image'


type Props = {}

const AuthModal = (props: Props) => {
    const [modal, setModal] = useRecoilState(useAuthModalState)
  
  return (
    <div className="container py-5 flex flex-col space-y-10">
      <div>
        <Image src="/LinkedIn_Logo.svg" alt='l' width={250} height={120} className="w-32"  />
      </div>

      {modal.view === "login" && <Login />}
    </div>

  )
}

export default AuthModal