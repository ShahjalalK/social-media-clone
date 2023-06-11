import { editProfileState } from '@/recoil/editProfileAtom'
import { Modal } from 'flowbite-react'
import React from 'react'
import { useRecoilState } from 'recoil'
import BgInfo from './bgInfo'
import ProfilePhoto from './profilePhoto'
import ProfileInfo from './profileInfo'

type Props = {}

const EditProfileModal = (props: Props) => {
    const [profileState, setProfileState] = useRecoilState(editProfileState)
    const closeHander = () => {
        setProfileState((prev) => ({
            ...prev,
            open : false,            
        }))
    }
  return (
    <Modal show={profileState.open} onClose={closeHander}>   
    <Modal.Header>
            {profileState.view === "bgImage" && "Background photo"}
            {profileState.view === "profileImage" && "Profile photo"}
            {profileState.view === "profileInfo" && "Edit intro"}
        </Modal.Header> 
    <Modal.Body>
    {profileState.view === "bgImage" && <BgInfo />}
    {profileState.view === "profileImage" && <ProfilePhoto />}
    {profileState.view === "profileInfo" && <ProfileInfo />}
    </Modal.Body>
    
  </Modal>
  )
}

export default EditProfileModal