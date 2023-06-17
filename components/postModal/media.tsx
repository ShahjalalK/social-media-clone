import { PostData, addPostData } from '@/recoil/postAtom'
import React, { useState } from 'react'
import {BsFillCameraFill} from 'react-icons/bs'
import { useRecoilState, useSetRecoilState } from 'recoil'
import Image from 'next/image'

type Props = {}

const Media = (props: Props) => {
  const [post, setPost] = useRecoilState(addPostData)

  const changeHandler = (e : React.ChangeEvent<HTMLInputElement>) => {
    const currentFile = e.target.files as FileList
    setPost((prev) => ({
      ...prev,
      media : currentFile[0],
      previewImage : currentFile[0] ? URL.createObjectURL(currentFile[0]) : ""
    }))
  }
    
  return (
    <div className="w-full h-72">
         <label className="w-full h-72 overflow-y-auto items-center flex justify-center cursor-pointer" htmlFor="media">
             {post.previewImage ? <Image src={post.previewImage} alt='p' width={650} height={350} className="w-full h-auto" /> : <BsFillCameraFill className=" text-9xl text-blue-200 " />}   
            </label>
            <input onChange={changeHandler} id='media' className="hidden" type="file" />
    </div>
  )
}

export default Media