import React, { KeyboardEventHandler, useState } from 'react'
import Image from 'next/image'
import {AiOutlineSearch} from 'react-icons/ai'
import Link from 'next/link'

type Props = {}

const LeftSide = (props: Props) => {
  const [searchShow, setSearchShow] = useState(false)
 
  return (
    <div className="flex  items-center space-x-2">
       <Link href="/"> <Image src="/linkedin.png" alt='linkedin' width={35} height={35} className="w-7 lg:w-9 py-1 lg:py-0" /></Link>

        <div className="text-xl cursor-pointer lg:hidden text-gray-600 hover:text-gray-700"  onClick={() => setSearchShow(true)}>
        <AiOutlineSearch  />
        </div>

        <div className={`${searchShow ? "max-lg:block" : "hidden"} lg:inline-flex absolute top-[50%] -translate-y-[50%] left-0 -translate-x-[2%] lg:left-[3.5%] w-[98%] lg:w-[350px]`}>
    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none ">
      <AiOutlineSearch className="text-2xl text-gray-400"/>
    </div>
    <input
   onKeyPress={(e) => {
    let key= e.keyCode || e.which
    console.log(key)
    if (key==13){
      setSearchShow(false)
   }
 }}
      type="search"
      id="default-search"
      className="block w-full lg:w-[280px] focus:lg:w-[350px] transition-[width] duration-200 ease-in-out  p-2  pl-10 text-sm text-gray-900 border border-gray-300 rounded bg-[#EEF3F8] focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      placeholder="Search"
      
    />
   
  </div>
        
    </div>
  )
}

export default LeftSide