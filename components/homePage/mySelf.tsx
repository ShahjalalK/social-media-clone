import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {}

const MySelf = (props: Props) => {
  return (
    <div className="bg-white rounded border border-gray-300 p-3 text-sm flex flex-col space-y-3">
        <p>Create an account to follow your favorite communities and start taking part in conversations.</p>
        <div className="py-1 flex items-center border space-x-1 text-center justify-center">
        <p>Developer by <Link href="https://web.facebook.com/shahajalalkhan.shahajalalkhan" target='blank' className="text-blue-600 hover:underline">Shahjalal</Link> </p> <Image src="/flag.png" width={20} height={20} alt='f' />
        </div>
        
    </div>
  )
}

export default MySelf