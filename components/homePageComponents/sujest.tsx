import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {BiPlus} from 'react-icons/bi'

type Props = {}

const Sujest = (props: Props) => {
  return (
    <Link href="/" className="flex items-start space-x-2">
      <Image src="/sujest4.jpg" alt='s' width={50} height={50} className="rounded-full w-10 h-10 object-cover" /> 
      <div>
        <h3 className="line-clamp-1 text-sm font-medium">
Laysha Ward</h3>
        <p className="text-sm line-clamp-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut, mollitia!</p>
        <button className="px-3 mt-1 py-1 rounded-full border border-gray-600 text-gray-500 font-medium flex items-center space-x-1 hover:ring-1 hover:ring-gray-600" onClick={() => alert(20)}><BiPlus /> <span>Follow</span></button>
      </div>      
      </Link>
  )
}

export default Sujest