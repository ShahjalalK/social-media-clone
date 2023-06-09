import { Spinner } from 'flowbite-react'
import React from 'react'

type Props = {
    title : string
}

const Noneed = ({title}: Props) => {
  return (
    <div className=" h-screen w-full my-8">
        <div className=" mx-auto mt-36 max-w-lg h-56 flex flex-col justify-center space-y-1 items-center bg-white rounded shadow-md ">
            <h2 className="text-5xl uppercase font-medium">{title}</h2>
            <p className="text-lg flex items-center "><span>work in progress</span> <Spinner /> </p>
        </div>
    </div>
  )
}

export default Noneed