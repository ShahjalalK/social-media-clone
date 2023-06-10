import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRecoilValue } from 'recoil'
import { UserState } from '@/recoil/userAuthAtom'
import { signOut } from 'firebase/auth'
import { auth } from '@/firebase/firebase.config'
import Cookies from 'js-cookie'

type Props = {}

const HomeProfileCard = (props: Props) => {
  const userValue = useRecoilValue(UserState)
  return (
    <div className="bg-white shadow border border-gray-300 rounded-lg overflow-hidden">
        <div className="w-full h-16 bg-gray-200 reletive">
          {userValue.bgURL && <Image src={userValue.bgURL} width={350} height={300} alt='bg' className="w-full h-full object-fill" />}
        </div>
        <Image src={userValue.photoURL} alt="u" width={70} height={70} className="-mt-10 w-20 h-20  object-cover bg-white rounded-full mx-auto drop-shadow " />
        <div className="text-center px-3 pt-1 pb-5 flex flex-col space-y-1">
            <h3 className="font-medium cursor-pointer hover:text-blue-600 hover:underline capitalize"><Link href="/in/[pid]" as={`/in/${userValue.uid}`}>{userValue.displayName || userValue.email.split("@")[0]}</Link></h3>
            <p className="line-clamp-2 text-sm">{userValue.title || "Setup your title..."}</p>
        </div>
        <hr />
        <div className="px-3 py-2 flex items-center  justify-between">
          <span>1,406 followers</span>
          <span>107 following</span>
        </div>
        <div className="flex items-center justify-center py-5">
          <button className="px-5 py-1 bg-gray-200 rounded-lg" onClick={() => {
            signOut(auth)
            Cookies.remove("user")
          }}>Sign Out</button>
        </div>
       
    </div>
  )
}

export default HomeProfileCard