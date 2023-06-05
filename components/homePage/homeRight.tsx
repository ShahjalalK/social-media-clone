import Image from 'next/image'
import React from 'react'
import Sujested from './sujested'
import { UserType } from '@/recoil/userAtom'

type Props = {
  
}

const HomeRight = ({}: Props) => {
  return (
    <div className="bg-white rounded border border-gray-300 p-3">
      <div className="flex items-center justify-between font-medium text-gray-500 text-sm">
       <p>Suggested for you</p>
       <button>See All</button>
      </div>
      <div className="py-5 flex flex-col space-y-5">
      <Sujested />
       
       
      </div>
    </div>
  )
}

export default HomeRight