import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

type Props = {}

const HomeProfileCard = (props: Props) => {
  return (
    <div className="bg-white shadow border border-gray-300 rounded-lg overflow-hidden">
        <div className="w-full h-16 bg-gray-200 reletive">

        </div>
        <Image src="/images.png" alt="u" width={70} height={70} className="-mt-10 w-20 h-20  object-cover bg-white rounded-full border mx-auto" />
        <div className="text-center px-3 pt-1 pb-5 flex flex-col space-y-1">
            <h3 className="font-medium cursor-pointer hover:text-blue-600 hover:underline"><Link href="/in/skgroup">Shahjalal Khan</Link></h3>
            <p className="line-clamp-2 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, ullam.</p>
        </div>
       
    </div>
  )
}

export default HomeProfileCard