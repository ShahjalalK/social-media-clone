import { auth, firestore } from '@/firebase/firebase.config'
import Image from 'next/image'
import { useRouter } from 'next/router';
import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import {AiOutlineSetting} from 'react-icons/ai'
import {parseCookies} from 'nookies'
import { UserType } from '@/recoil/userAtom';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { useAuthModalState } from '@/recoil/useAuthModalAtom';
import { userDataState } from '@/recoil/userAtom';




type Props = {
  
}

const RightSide = ({}: Props) => {
  const setModalState = useSetRecoilState(useAuthModalState)
  const [userStateValue, setUserState] = useRecoilState(userDataState)
  const [user, loading, error] = useAuthState(auth);

  const cookies = parseCookies()
  
  const userCookie = cookies.user ? JSON.parse(cookies.user) : ""



  const followHandler = () => {
    if(!user){
      setModalState((prev) => ({
        ...prev,
       open : true,
       view : "login"
      }))
      return
    }

    alert("You are following")
    
  }

  const settingHandler = () => {
    alert(344)
  }

  return (
    <div className="bg-white rounded overflow-hidden border">
        <div className={`bg-gradient-to-r from-purple-500 to-pink-500 h-24 w-full bg-cover relative overflow-hidden `}>
        {userStateValue.uid === userCookie.uid && <AiOutlineSetting className="text-2xl cursor-pointer text-white absolute top-5 right-5 z-30" onClick={settingHandler} />}
       {userStateValue.bg &&  <Image src={userStateValue.bg} width={350} height={100} alt='bg' className="absolute top-0 left-0 w-full h-full object-cover" />}
        </div>
        <div className="px-5 flex items-center justify-between relative">
            <div>
            {userStateValue.photoURL && <Image src={userStateValue.photoURL}  alt="user" width={80} height={80} className=" -mt-8   rounded shadow bg-white" /> }
            <p className="mt-1 text-sm">u/{userStateValue.displayName || userStateValue.email?.split("@")[0]}</p>
                       
            </div>
            
            
            <button className="px-5 py-1 rounded bg-blue-600 text-white font-medium" onClick={followHandler}>Follow</button>
           
          
           
            
           
        </div>

        <div className="flex items-center justify-between px-5 py-3"><p>3 posts</p> <p>890 followers</p> <p>456 following</p></div>

        {userStateValue.description && <p className="text-sm p-5 text-g345ray-500">{userStateValue.description}</p>} 
      

        <div className="p-5">
        <button className="w-full py-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white">New Post</button>
        </div>
    </div>
  )
}

export default RightSide




