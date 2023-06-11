import React, { useState } from 'react'
import {BsFillCameraFill} from 'react-icons/bs'

type Props = {}

const Media = (props: Props) => {
    
  return (
    <div className="w-full h-72">
         <label className="w-full h-full items-center flex justify-center cursor-pointer" htmlFor="media">
                <BsFillCameraFill className=" text-9xl text-blue-200 " />
            </label>
            <input id='media' className="hidden" type="file" />
    </div>
  )
}

export default Media