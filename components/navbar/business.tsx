import React from 'react'
import {MdApps} from 'react-icons/md'
import {FaCaretDown} from 'react-icons/fa'
import Link from 'next/link'

type Props = {}

const Business = (props: Props) => {
  return (
    <div className=" hidden lg:flex items-center space-x-3 whitespace-nowrap">
        <div className="flex items-center flex-col text-gray-500 hover:text-gray-700  cursor-pointer">
            <MdApps className="text-2xl" />
            <p className="text-xs flex items-center "><span>For Business</span> <FaCaretDown className="text-lg" /></p>
        </div>
        <Link href="/" className="text-xs text-center text-[#968060] underline" >Try Premium for <br /> free</Link>
    </div>
  )
}

export default Business