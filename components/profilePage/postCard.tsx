import React from 'react'
import Image from 'next/image'
import {GoComment} from 'react-icons/go'
import {AiOutlineHeart} from 'react-icons/ai'
import {RiShareForwardLine} from 'react-icons/ri'
import {BiWorld} from 'react-icons/bi'
import Link from 'next/link'
import { auth } from '@/firebase/firebase.config'
import { useAuthState } from 'react-firebase-hooks/auth'

type Props = {
 
}

const PostCard = ({}: Props) => {
  const [user, loading, error] = useAuthState(auth);
  return (
    <div className="bg-white p-5 rounded">
      <Link href="/"  className="flex items-center space-x-1 cursor-pointer">
        <Image src="/profile.png" alt='p' width={45} height={45} className="rounded-full border border-gray-300" />
        <div>
        <h5 className="text-sm hover:text-blue-800 hover:underline text-gray-700 font-medium">shahjalalk</h5>
        <p className="text-sm text-gray-500">Freelance Next Js Web App Developer at Fiverr</p>
        <p className="text-sm text-gray-500 flex items-center space-x-1"><span>2h.</span> <BiWorld /></p>
        </div>

      </Link>
            <h1 className="text-xl">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui inventore, consequuntur.
            </h1>
           <div className="my-5 flex justify-center">
           <Image src="/profile.png" alt='post' width={550} height={550} className=" h-auto object-contain" />
           </div>
           <div className="flex items-center space-x-5">
            <div className="flex items-center space-x-1">
                <GoComment className="text-xl" />
                <span className="text-sm text-gray-500">227 Comments</span>
                </div>

                <div className="flex items-center space-x-1">
                <AiOutlineHeart className="text-xl" />
                <span className="text-sm text-gray-500">227 Likes</span>
                </div>

                <div className="flex items-center space-x-1">
                <RiShareForwardLine className="text-xl" />
                <span className="text-sm text-gray-500">Share</span>
                </div>
           </div>
        </div>
  )
}

export default PostCard