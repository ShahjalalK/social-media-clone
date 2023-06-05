import { useAuthModalState } from '@/recoil/useAuthModalAtom'
import React from 'react'
import { useSetRecoilState } from 'recoil'

type Props = {}

const AuthButton = (props: Props) => {
    const setModalState = useSetRecoilState(useAuthModalState)
    const signupModal = () => {
        setModalState((prev) => ({
            ...prev,
            open : true,
            view : "login"
        }))
    }
  return (
    <div className="flex items-center space-x-2">
        <button onClick={signupModal} className="px-7 py-2 bg-white font-medium rounded-md">Log In</button>
    </div>
  )
}

export default AuthButton