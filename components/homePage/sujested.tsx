import { UserType } from '@/recoil/userAtom'
import Image from 'next/image'
import React from 'react'
import {FiPlus} from 'react-icons/fi'
import Link from 'next/link'

type Props = {
  
}

const Sujested = ({}: Props) => {
  return (
    <div className="flex space-x-3 items-start">
        <Image  src="/profile.jpg" alt='s' width={45} height={45} className="rounded-full object-cover" />
       <div className="flex flex-col">
        <h4 className="text-sm font-medium hover:text-blue-800 hover:underline"><Link href="/u/rd" >shahjalalk</Link></h4>
       <p className="text-xs text-gray-600">Nation</p>
       <button className="border mt-2 flex items-center space-x-1 justify-center py-1 rounded-md "><FiPlus /> <span className="font-medium text-gray-500">Follow</span> </button>
       </div>
        </div>
  )
}

export default Sujested