import React from 'react'
import {AiFillHome} from 'react-icons/ai'
import {HiUsers} from 'react-icons/hi'
import {BsBriefcaseFill, BsChatDotsFill} from 'react-icons/bs'
import {IoNotificationsSharp} from 'react-icons/io5'
import {FaCaretDown} from 'react-icons/fa'
import Link from 'next/link'
import {useRouter} from 'next/router'
import Image from 'next/image'
import { Dropdown } from 'flowbite-react'

type Props = {}

const UserMenu = (props: Props) => {
    const router = useRouter()
  return (
    <div className="border-r flex items-center space-x-5 lg:space-x-0  lg:pr-5 whitespace-nowrap">
        <Link href="/" className={`flex flex-col text-gray-500 hover:text-gray-900 text-sm capitalize lg:px-5 py-1 items-center lg:border-b-2 border-transparent   ${router.pathname === "/" ? "!border-gray-900 text-gray-900" : ""} `}>
            <AiFillHome className="text-2xl " />
            <p className="hidden lg:inline-flex">Home</p>
        </Link>

        <Link href="/mynetwork" className={`flex flex-col text-gray-500 hover:text-gray-900 text-xs  lg:px-5 py-1 items-center lg:border-b-2 capitalize border-transparent
           ${router.pathname === "/mynetwork" ? "!border-gray-900 text-gray-900" : ""} `}>
            <HiUsers className="text-2xl " />
            <p className="hidden lg:inline-flex">My Network</p>
        </Link>

        <Link href="/jobs" className={`flex flex-col text-gray-500 hover:text-gray-900 text-xs  lg:px-5 py-1 items-center lg:border-b-2 capitalize border-transparent
           ${router.pathname === "/jobs" ? "!border-gray-900 text-gray-900" : ""} `}>
            <BsBriefcaseFill className="text-2xl " />
            <p className=" hidden lg:inline-flex">Jobs</p>
        </Link>

        <Link href="/messaging" className={`flex flex-col text-gray-500 hover:text-gray-900 text-xs  lg:px-5 py-1 items-center lg:border-b-2 capitalize border-transparent
           ${router.pathname === "/messaging" ? "!border-gray-900 text-gray-900" : ""} `}>
            <BsChatDotsFill className="text-2xl " />
            <p className=" hidden lg:inline-flex">Messaging</p>
        </Link>


        <Link href="/notifications" className={`flex flex-col text-gray-500 hover:text-gray-900 text-xs lg:px-5 py-1 items-center lg:border-b-2 capitalize border-transparent
           ${router.pathname === "/notifications" ? "!border-gray-900 text-gray-900" : ""} `}>
            <IoNotificationsSharp className="text-2xl " />
            <p className="hidden lg:inline-flex">Notifications</p>
        </Link>
        
        


        <Dropdown
  label={<div className="hidden lg:flex flex-col text-gray-500 hover:text-gray-900 text-xs  px-5 py-1 items-center capitalize cursor-pointer">
  <Image src="/images.png" alt="u" width={26} height={26} className="rounded-full" />
  <p className="text-xs flex items-center">Me <FaCaretDown className="text-lg" /></p>
</div>}
inline={true}
arrowIcon={false}


>
  <Dropdown.Header className="flex flex-col space-y-3">
    <div className="flex items-center space-x-2">
    <Image src="/user.png" alt="u" width={35} height={35} className="rounded-full w-12 h-12 border object-cover" />
    <div>
        <h1 className="capitalize font-bold">Shahjalal Khan</h1>
        <p className="line-clamp-1">Lorem ipsum dolor sit, amet consectetur </p>
    </div>
    </div>
    <button className="w-full rounded-full py-1 border text-blue-600 hover:text-blue-800 capitalize border-blue-600 hover:border-blue-800 focus:border-2 font-bold transition-colors duration-300 ease-in-out">view profile</button>
  </Dropdown.Header>


  <Dropdown.Header >
    <div className="flex flex-col space-y-3 items-start justify-start">
    <h2 className="text-lg font-medium">Account</h2>
    <div className="flex flex-col space-y-2">
        <p className="cursor-pointer text-gray-600 hover:underline"> Settings & Privacy</p>
        <p className="cursor-pointer text-gray-600 hover:underline">Help</p>
        <p className="cursor-pointer text-gray-600 hover:underline">Language</p>
    </div>
    </div>
  </Dropdown.Header>
  
  <Dropdown.Header >
    <div className="flex flex-col space-y-3 items-start justify-start">
    <h2 className="text-lg font-medium">Manage</h2>
    <div className="flex flex-col space-y-2">
        <p className="cursor-pointer text-gray-600 hover:underline"> Posts & Activity</p>
       
        <p className="cursor-pointer text-gray-600 hover:underline">Job Posting Account</p>
    </div>

 

    </div>
  </Dropdown.Header>
  <Dropdown.Item>
    Sign out
    
  </Dropdown.Item>
</Dropdown>
    </div>
  )
}

export default UserMenu