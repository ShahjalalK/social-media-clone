import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {IoCloseSharp} from 'react-icons/io5'
type Props = {}

const NetworkCard = (props: Props) => {
  return (
    <div className="bg-white rounded-lg border overflow-hidden hover:shadow-lg hover:drop-shadow">
        <div className="w-full h-20 bg-gray-300 overflow-hidden relative">
            <div className="w-8 h-8 rounded-full bg-black/70 cursor-pointer absolute top-3 right-3 flex items-center justify-center text-white"><IoCloseSharp className="text-xl" /></div>
            <Image src="/bg.jpg" alt='bg' width={350} height={300} className="w-full h-full object-fill" />
        </div>
       <Link href="/in/pid"> <Image src="/sujest2.jpg" alt='n' width={50} height={50} className="w-16 h-16 rounded-full border object-cover -mt-10 ml-5 relative"  /></Link>
       <div className="px-2 py-2">
       <h1 className="font-medium line-clamp-1"><Link href="/in/pid">Ipek Williamson, CIC</Link></h1>
        <p className="line-clamp-2 text-sm text-gray-500"><Link href="/in/pid">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto deserunt animi nostrum ducimus atque officiis veritatis soluta minima sunt, ex veniam recusandae, fugiat dolor? Voluptatem, voluptatum! Eum officiis officia incidunt!</Link></p>

        <button className="w-full rounded-full py-1 font-medium border border-blue-500 text-blue-600 mt-3 hover:bg-blue-100" onClick={() => alert(40)}>Follow</button>

       </div>
    </div>
  )
}

export default NetworkCard