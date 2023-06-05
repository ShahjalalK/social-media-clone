import React from 'react'
import {BsFire} from 'react-icons/bs'
import {BiCertification} from 'react-icons/bi'
import {TbArrowBigUpLinesFilled} from 'react-icons/tb'


type Props = {}

const TopPost = (props: Props) => {
  return (
    <div className="bg-white p-3 rounded flex space-x-5">
        <div className="flex items-center cursor-pointer text-blue-600 font-medium hover:bg-gray-200 p-1 rounded-full">
            <BsFire className="text-2xl" />
            <span>Hot</span>
        </div>
        <div className="flex items-center cursor-pointer text-gray-500 font-medium hover:bg-gray-200 p-1 rounded-full">
            <BiCertification className="text-2xl" />
            <span>New</span>
        </div>
        <div className="flex items-center cursor-pointer text-gray-500 font-medium hover:bg-gray-200 p-1 rounded-full">
            <TbArrowBigUpLinesFilled className="text-2xl" />
            <span>Top</span>
        </div>
    </div>
  )
}

export default TopPost