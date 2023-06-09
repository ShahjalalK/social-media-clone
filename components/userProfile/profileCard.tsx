import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import {MdOutlineNotificationsNone, MdNotificationsActive} from 'react-icons/md'
import {HiOutlineArrowTopRightOnSquare} from 'react-icons/hi2'
import {BsFillSendFill} from 'react-icons/bs'
import {BiPlus} from 'react-icons/bi'
import { Avatar } from 'flowbite-react'

type Props = {}

const ProfileCard = (props: Props) => {
    const [notify, setNotify] = useState(false)
  return (
    <div className="bg-white rounded-lg shadow-md border border-gray-300">
        <div className="bg-gray-300 rounded-lg overflow-hidden w-full h-52 relative">

            <Image src="/bg-2.jpg" width={750} height={300} alt="bg" className="w-full h-full object-fill z-10" />

        </div>
        <div className="flex items-center justify-between px-5">
            <Image src="/images.png" width={300} height={300} alt='u' className="w-32 h-32 rounded-full border -mt-20 z-20" />
            {notify ? <MdOutlineNotificationsNone className="text-3xl text-gray-600 cursor-pointer" onClick={() => setNotify(!notify)} /> : <MdNotificationsActive className="text-3xl text-gray-600 cursor-pointer" onClick={() => setNotify(!notify)} />}
            
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-1 px-5 pb-8">
        <div className=" col-span-1 lg:col-span-2 flex flex-col space-y-3">
            <div>
            <h1 className="text-2xl font-medium capitalize">Shawn Nason </h1>
            <p>HUMAN-OBSESSED, MAVERICK MINDED || CANCER SURVIVOR NEURODIVERSITY ADVOCATE || FORMER WALT DISNEY IMAGINEER</p>
            </div>
            <p className="flex space-x-2 items-center"><span>Cincinnati Metropolitan Area</span> <span className="text-blue-700 cursor-pointer">Contact info</span></p>
            <div className="flex">
            <Link href="/" className=" flex items-center space-x-1 text-blue-800 hover:underline "><span>LET’S WORK TOGETHER!</span> <HiOutlineArrowTopRightOnSquare /> </Link>
            </div>
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