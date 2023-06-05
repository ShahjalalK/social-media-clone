import { auth } from '@/firebase/firebase.config'
import { signOut } from 'firebase/auth'
import Image from 'next/image'
import React from 'react'
import {HiOutlineLogout} from 'react-icons/hi'
import Cookies from 'js-cookie'
import Link from 'next/link'

type Props = {
  
}

const HomeLeft = ({}: Props) => {
  
const signOutHandler = async() =>{
 await signOut(auth)
 Cookies.remove("user")
} 
  return (
    <div className="bg-white border border-gray-300 text-center rounded-md overflow-hidden">
       <div className={`bg-gradient-to-r from-purple-500 to-pink-500 h-20 w-full bg-cover relative overflow-hidden `}>
       <Image src="/bg.jpg" width={350} height={100} alt='bg' className="absolute top-0 left-0 w-full h-full object-cover" />
        </div>
        <div className="px-3">
        <Image src="/profile.png" alt='p' width={70} height={70} className="rounded-full border mx-auto -mt-8 flex relative" />
        <h1 className="font-medium"><Link href="/u/[profileId]" as={`/u/shahjalalk`} >awesome </Link></h1>
        <p className="text-sm my-3 text-gray-600">lodjsldie sslei slslssli slsls i dd</p>
        <p className="flex items-center justify-center space-x-5 text-sm text-gray-500"><span>23 following</span> <span>23 followers</span></p>
       <div className="py-5">
       <div onClick={signOutHandler} className="flex items-center space-x-1 justify-center text-sm border py-2 text-gray-500 cursor-pointer rounded">
          <HiOutlineLogout className="text-xl" />
          <span>Sign Out</span>
        </div>
       </div>
        </div>
    </div>
  )
}

export default HomeLeft

