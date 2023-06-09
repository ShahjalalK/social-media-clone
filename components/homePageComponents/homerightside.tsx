import React from 'react'
import Sujest from './sujest'
import Link from 'next/link'
import {BsArrowRight} from 'react-icons/bs'

type Props = {}

const HomeRightSide = (props: Props) => {
  return (
    <div className="bg-white rounded-lg shadow p-2 border border-gray-300 flex flex-col space-y-5">
      <div className="flex items-center justify-between">
        <p className="font-medium">Add to your feed</p>
        <span className="w-4 h-4 text-white flex items-center justify-center cursor-pointer font-medium bg-gray-500 rounded text-sm">i</span>
      </div>
     <div className="flex flex-col space-y-2">
     <Sujest />
     <Sujest />
     <Sujest />     
     </div>
    <div>
    <Link href="/mynetwork" className="inline-flex items-center space-x-1 text-sm px-3 text-gray-500 hover:bg-gray-200"><span>View all recommendations</span> <BsArrowRight /> </Link>
    </div>
    </div>
  )
}

export default HomeRightSide