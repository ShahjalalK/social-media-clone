import React from 'react'
import Image from 'next/image'

type Props = {}

const Comment = (props: Props) => {
  return (
    <div className="flex items-start space-x-2 ">
    <Image src="/sujest2.jpg" alt='s' width={30} height={30} className="rounded-full border object-cover w-9 h-9" />
    <div className="bg-gray-200 rounded p-3 flex flex-col space-y-2">
    <div className="flex items-start justify-between">
        <div>
        <h4 className=" capitalize font-medium text-sm">Shakib Khan</h4>
        <p className='text-sm text-gray-500 line-clamp-1'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni, aperiam?</p>
        </div>
        <p className="text-sm text-gray-600">1h</p>
    </div>
    <p className="text-sm">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde reprehenderit magni nostrum nesciunt! Aliquam.</p>
    </div>
</div>
  )
}

export default Comment