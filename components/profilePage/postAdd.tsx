import Image from 'next/image'
import React from 'react'
import {CiImageOn} from 'react-icons/ci'

import {useRouter} from 'next/router'
import { userDataState } from '@/recoil/userAtom'
import { useRecoilValue } from 'recoil'

type Props = {
 
}

const PostAdd = ({}: Props) => {
  const userStateValue = useRecoilValue(userDataState)
  return (
    <div className="bg-white p-1 rounded-md flex space-x-2 items-center flex-grow">
        <Image src={userStateValue.photoURL} alt='p' width={45} height={45} className="rounded-full border" />
        <input type="text" placeholder={`Search ${userStateValue.displayName || userStateValue.email?.split("@")[0]} `} className="p-2 rounded flex-grow bg-gray-100 border border-gray-400" />
        <CiImageOn className="text-3xl cursor-pointer text-gray-500"  />   
        <button className="px-4 py-1 rounded-full bg-gray-500 text-white block">Post</button>
        </div>
  )
}

export default PostAdd