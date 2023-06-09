import React from 'react'
import {HiUsers, HiUser} from 'react-icons/hi2'
import {RiContactsBookUploadFill, RiPagesLine} from 'react-icons/ri'
import {MdGroups2, MdOutlineArrowForwardIos} from 'react-icons/md'
import {BiHash} from 'react-icons/bi'

import {FaRegCalendarAlt, FaRegNewspaper} from 'react-icons/fa'


type Props = {}

const ManageNetwork = (props: Props) => {
  return (
    <div className="w-full rounded-lg border shadow bg-white flex flex-col pb-3 space-y-2">
        <h3 className="px-3 pt-3">Manage my network</h3>
        <div className="flex hover:bg-gray-200 items-center flex-grow px-4 py-1 text-gray-500 cursor-pointer">
            <div className="flex flex-grow items-center space-x-3">
            <HiUsers className="text-2xl" />
            <span>Connections</span>
            </div>
            <span className="whitespace-nowrap">1,390</span>
        </div>

        <div className="flex hover:bg-gray-200 items-center flex-grow px-4 py-1 text-gray-500 cursor-pointer">
            <div className="flex flex-grow items-center space-x-3">
            <RiContactsBookUploadFill className="text-2xl" />
            <span>Contacts</span>
            </div>
            <span className="whitespace-nowrap">0</span>
        </div>

        <div className="flex hover:bg-gray-200 items-center flex-grow px-4 py-1 text-gray-500 cursor-pointer">
            <div className="flex flex-grow items-center space-x-3">
            <HiUser className="text-2xl" />
            <span>Following & followers</span>
            </div>
           
        </div>

        <div className="flex hover:bg-gray-200 items-center flex-grow px-4 py-1 text-gray-500 cursor-pointer">
            <div className="flex flex-grow items-center space-x-3">
            <MdGroups2 className="text-2xl" />
            <span>Groups</span>
            </div>
           
        </div>
        <div className="flex hover:bg-gray-200 items-center flex-grow px-4 py-1 text-gray-500 cursor-pointer">
            <div className="flex flex-grow items-center space-x-3">
            <FaRegCalendarAlt className="text-2xl" />
            <span>Events</span>
            </div>
           
        </div>
        <div className="flex hover:bg-gray-200 items-center flex-grow px-4 py-1 text-gray-500 cursor-pointer">
            <div className="flex flex-grow items-center space-x-3">
            <RiPagesLine className="text-2xl" />
            <span>Pages</span>
            </div>
           
        </div>

        <div className="flex hover:bg-gray-200 items-center flex-grow px-4 py-1 text-gray-500 cursor-pointer">
            <div className="flex flex-grow items-center space-x-3">
            <FaRegNewspaper className="text-2xl" />
            <span>Newsletters</span>
            </div>
           
        </div>

        <div className="flex hover:bg-gray-200 items-center flex-grow px-4 py-1 text-gray-500 cursor-pointer">
            <div className="flex flex-grow items-center space-x-3">
            <BiHash className="text-2xl" />
            <span>Hashtags</span>
            </div>
           
        </div>
        <div className="px-4">
        <button className="px-5 py-1 font-medium text-gray-500 hover:bg-gray-200 rounded flex items-center space-x-2"><span>Show less</span> <MdOutlineArrowForwardIos className=" -rotate-90" /></button>
        </div>
    </div>
  )
}

export default ManageNetwork