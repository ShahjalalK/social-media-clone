import { auth, firestore } from '@/firebase/firebase.config'
import Image from 'next/image'
import { useRouter } from 'next/router';
import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import {AiOutlineSetting} from 'react-icons/ai'
import {parseCookies} from 'nookies'
import { UserType } from '@/recoil/userAtom';
import { useSetRecoilState } from 'recoil';
import { useAuthModalState } from '@/recoil/useAuthModalAtom';
import { userDataState } from '@/recoil/userAtom';




type Props = {
  
}

const RightSide = ({}: Props) => {
  const setModalState = useSetRecoilState(useAuthModalState)
  const setUserData = useSetRecoilState(userDataState)
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
        <Image src="/bg.jpg" width={350} height={100} alt='bg' className="absolute top-0 left-0 w-full h-full object-cover" />
        </div>
        <div className="px-5 flex items-center justify-between relative">
            <div>
            <Image src="https://firebasestorage.googleapis.com/v0/b/blog-82ecc.appspot.com/o/images.png?alt=media&token=f27bb769-5e4d-4ffd-b1da-cb3eb3fbadea&_gl=1*1ynqocm*_ga*NzEyNzYzNy4xNjc2NzAyOTIy*_ga_CW55HF8NVT*MTY4NTkzMDIxNS45OC4xLjE2ODU5MzExNjkuMC4wLjA."  alt="user" width={80} height={80} className=" -mt-8   rounded shadow bg-white" /> 
            <p className="mt-1 text-sm">u/shahjalalk</p>
                       
            </div>
            <AiOutlineSetting className="text-2xl cursor-pointer text-blue-800" onClick={settingHandler} />
            
            <button className="px-5 py-1 rounded bg-blue-600 text-white font-medium" onClick={followHandler}>Follow</button>
           
          
           
            
           
        </div>

        <div className="flex items-center justify-between px-5 py-3"><p>3 posts</p> <p>890 followers</p> <p>456 following</p></div>

        <p className="text-sm p-5 text-g345ray-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae, necessitatibus!</p>
      

        <div className="p-5">
        <button className="w-full py-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white">New Post</button>
        </div>
    </div>
  )
}

export default RightSide




