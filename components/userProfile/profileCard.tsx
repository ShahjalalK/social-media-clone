import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import {MdOutlineNotificationsNone, MdNotificationsActive} from 'react-icons/md'
import {HiOutlineArrowTopRightOnSquare} from 'react-icons/hi2'
import {BsFillSendFill} from 'react-icons/bs'
import {BiPlus} from 'react-icons/bi'
import { Avatar } from 'flowbite-react'
import {MdOutlineModeEdit} from 'react-icons/md'
import {VscEdit} from 'react-icons/vsc'
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { UserState } from '@/recoil/userAuthAtom'
import {parseCookies} from 'nookies'
import { editProfileState } from '@/recoil/editProfileAtom'

type Props = {}

const ProfileCard = (props: Props) => {
    const [notify, setNotify] = useState(false)
    const userValue = useRecoilValue(UserState)
    const setProfileState = useSetRecoilState(editProfileState)
    const cookies = parseCookies()
    const userCookie = cookies.user ? JSON.parse(cookies.user) : ""


    const BgHandler = () => {
      setProfileState((prev) => ({
        ...prev,
        open : true,
        view : "bgImage"
      }))
    }

    
  return (
    <div className="bg-white rounded-lg shadow-md border border-gray-300">
        <div className="bg-gray-300 rounded-lg overflow-hidden w-full h-52 relative">
              <div onClick={BgHandler} className="bg-white/95 rounded-full w-8 h-8 absolute top-3 right-3 flex items-center justify-center text-blue-700 cursor-pointer text-xl hover:text-gray-600"><MdOutlineModeEdit /></div>
            {userValue.bgURL && <Image src={userValue.bgURL} width={750} height={300} alt="bg" className="w-full h-full object-fill z-10" />}

        </div>
        <div className="flex items-center justify-between px-5">
            <Image src={userValue.photoURL} width={300} height={300} alt='u' className="w-32 h-32 rounded-full border -mt-20 z-20 cursor-pointer" />
           
            {userCookie.token == userValue.token ? 
            
            (
             < div className="text-2xl w-10 h-10 flex items-center justify-center hover:bg-gray-200 rounded-full cursor-pointer"><VscEdit /></div>
            ):
            (
              <div>
            {notify ? <MdOutlineNotificationsNone className="text-3xl text-gray-600 cursor-pointer" onClick={() => setNotify(!notify)} /> : <MdNotificationsActive className="text-3xl text-gray-600 cursor-pointer" onClick={() => setNotify(!notify)} />}
            </div>

            )
            
          
          }
            
            
            
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-1 px-5 pb-8">
        <div className=" col-span-1 lg:col-span-2 flex flex-col space-y-3">
            <div>
            <h1 className="text-2xl font-medium capitalize">{userValue.displayName || userValue.email.split("@")[0]} </h1>
            <p>{userValue.title}</p>
            </div>
            {userValue.location && <p className="flex space-x-2 items-center"><span>{userValue.location}</span> <span className="text-blue-700 cursor-pointer">Contact info</span></p>}

            {userValue.webURL && <div className="flex">
            <Link href={userValue.webURL} className=" flex items-center space-x-1 text-blue-800 hover:underline "><span>LET’S WORK TOGETHER!</span> <HiOutlineArrowTopRightOnSquare /> </Link>
            </div>}
            
            <p className="flex items-center space-x-5"><span className="text-sm text-gray-500">69,032 followers </span> <span className="text-blue-700 text-sm font-medium hover:underline">500+ connections</span></p>
            <div className="flex items-center space-x-2">
            <Avatar.Group className="cursor-pointer">
    <Avatar
      img="/sujest2.jpg"
      rounded
      stacked
      size="xs"
    />
    <Avatar
      img="/sujest3.jpg"
      rounded
      stacked
      size="xs"
    />
    <Avatar
      img="/sujest1.jpg"
      rounded
      stacked
      size="xs"
    />
    
    
            </Avatar.Group>
            <span className=" capitalize text-blue-700 text-sm hover:underline cursor-pointer">Tracy Borreson, Phil Sipowicz, and 68 other mutual connections</span>                
            </div>
            <div className="flex items-center space-x-5">
                <button className="px-3 py-1 border bg-blue-600 hover:bg-blue-800 text-white font-medium rounded-full flex items-center space-x-1"> <BiPlus /> <span>Follow</span></button>
                <button className="px-3 py-1 border border-blue-600  text-blue-600 font-medium rounded-full flex items-center space-x-1 hover:bg-blue-100"> <BsFillSendFill /> <span>Message</span></button>
                <button className="px-3 py-1 border border-gray-600  text-gray-600 font-medium rounded-full hover:bg-gray-300 hover:ring-1 hover:ring-gray-600">More</button>
            </div>
        </div>
        <div className="hidden lg:inline-block">
            
        </div>
        </div>
    </div>
  )
}

export default ProfileCard