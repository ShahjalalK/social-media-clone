import Image from 'next/image'
import React from 'react'
import {CiImageOn} from 'react-icons/ci'

import {useRouter} from 'next/router'
import { UserType } from '@/recoil/userAtom'

type Props = {
 
}

const PostAdd = ({}: Props) => {
  const router = useRouter()
  return (
    <div className="bg-white p-1 rounded-md flex space-x-2 items-center flex-grow">
        <Image src="/profile.png" alt='p' width={45} height={45} className="rounded-full border" />
        <input type="text" placeholder="awesome feature" className="p-2 rounded flex-grow bg-gray-100 border border-gray-400" />
        <CiImageOn className="text-3xl cursor-pointer text-gray-500"  />   
        <button onClick={() => router.push("/createblog") } className="px-4 py-1 rounded-full bg-gray-500 text-white block">Post</button>
        </div>
  )
}

export default PostAdd