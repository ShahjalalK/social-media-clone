import React from 'react'
import Image from 'next/image'
import {HiPhoto} from 'react-icons/hi2'
import {BsFillPlayBtnFill} from 'react-icons/bs'
import {FcCalendar} from 'react-icons/fc'
import {IoNewspaperOutline} from 'react-icons/io5'
import { useRecoilValue } from 'recoil'
import { UserState } from '@/recoil/userAuthAtom'

type Props = {}

const PostAdd = (props: Props) => {
  const userValue = useRecoilValue(UserState)
  return (
    <div className="bg-white shadow border border-gray-300 py-2 px-5 rounded-lg">
        <div className="flex items-center space-x-2">
            <Image src={userValue.photoURL} width={50} height={50} alt='u' className="w-14 h-14 object-cover rounded-full" />
            <button className="border rounded-full py-2 text-gray-600 border-gray-300 w-full hover:bg-gray-100 text-start px-5">Start a post</button>
        </div>
        <div className="flex items-center justify-between mt-1 whitespace-nowrap">
          <div className="flex items-center space-x-2 py-4 px-2 hover:bg-gray-100 cursor-pointer rounded">
            <HiPhoto className="text-2xl text-[#378FE9]" />
            <p className="text-gray-500">Photo</p>
          </div>

          <div className="flex items-center space-x-2 py-4 px-2 hover:bg-gray-100 cursor-pointer rounded">
            <BsFillPlayBtnFill className="text-2xl text-[#5F9B41]" />
            <p className="text-gray-500">Video</p>
          </div>

          <div className="flex items-center space-x-2 py-4 px-2 hover:bg-gray-100 cursor-pointer rounded">
            <FcCalendar className="text-2xl text-blue-600" />
            <p className="text-gray-500">Event</p>
          </div>

          <div className="hidden md:flex items-center space-x-2 py-4 px-2 hover:bg-gray-100 cursor-pointer rounded">
            <IoNewspaperOutline className="text-2xl text-[#E16745]" />
            <p className="text-gray-500">Write article</p>
          </div>
        </div>
    </div>
  )
}

export default PostAdd