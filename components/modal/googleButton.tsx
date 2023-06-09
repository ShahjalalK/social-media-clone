import React from 'react'
import {FcGoogle} from 'react-icons/fc'

type Props = {}

const GoogleButton = (props: Props) => {
  return (
    <button type='button' className=" capitalize flex-grow py-2 rounded-full border border-gray-600 hover:ring-2 ring-gray-400 flex items-center justify-center space-x-1 "><FcGoogle className="text-2xl" /> <span>continue with google</span></button>
  )
}

export default GoogleButton