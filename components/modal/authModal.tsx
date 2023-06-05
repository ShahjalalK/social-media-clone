import { useAuthModalState } from '@/recoil/useAuthModalAtom'
import { Modal } from 'flowbite-react'
import React from 'react'
import {useRecoilState} from 'recoil'
import Signup from './signup'
import Login from './login'
import ResetPassword from './resetPassword'
import EditProfile from './editProfile'
import Post from './post'

type Props = {}

const AuthModal = (props: Props) => {
    const [modal, setModal] = useRecoilState(useAuthModalState)
    const modalHandler = () => {
        setModal((prev) => ({...prev, open : false}))
    }
  return (
    <>

<Modal
show={modal.open}
  
  onClose={modalHandler}
  size={modal.view ==="post" || modal.view ==="editProfile" ? "lg" : "md"}
>
  <Modal.Header>
  {modal.view ==="signup" &&  "Sign Up"}
   {modal.view ==="login" &&  "Login"}
   {modal.view ==="resetPassword" &&  "Reset Password"}
   {modal.view ==="editProfile" &&   "Edit intro"}
   {modal.view ==="post" &&  "Post"}
  </Modal.Header>
  <Modal.Body>
   {modal.view ==="signup" &&  <Signup />}
   {modal.view ==="login" &&  <Login />}
   {modal.view ==="resetPassword" &&  <ResetPassword />}
   {modal.view ==="editProfile" &&   <EditProfile />}
   {modal.view ==="post" &&  <Post />}
    
    
   
    
  </Modal.Body>
  
</Modal>
    
    </>
  )
}

export default AuthModal