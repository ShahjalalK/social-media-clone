import React from 'react'
import Image from 'next/image'
import {BiWorld} from 'react-icons/bi'
import { Avatar } from 'flowbite-react'
import LikeComments from './likecomments'

type Props = {}

const PostCard = (props: Props) => {
  return (
    <div className="bg-white rounded-lg shadow border-gray-300 py-3 px-5 flex flex-col space-y-2">
        <div className="flex items-center space-x-2 cursor-pointer">
            <Image src="/images.png" width={70} height={70} alt="p" className="w-14 h-14 rounded-full border object-cover" />
            <div>
                <h4 className="font-medium text-sm hover:text-blue-600 hover:underline">Shahjalal Khan</h4>
                <p className="line-clamp-1 text-sm text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, voluptate earum! Aliquid iste velit, optio quaerat suscipit qui. Odio illum corporis repudiandae nostrum sint sit et totam quo, amet animi.</p>
                <p className="text-sm text-gray-500 flex items-center space-x-1"><span>1h .</span> <BiWorld /></p>
            </div>
        </div>
        <div>
            <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur, reprehenderit! Velit doloremque dolore minus sequi unde doloribus, nobis deleniti dicta.</h1>
            <Image src="/sujest3.jpg" width={350} height={350} alt='bg' className='w-full h-auto mt-3' />
        </div>
        <div className="flex items-center justify-between">
        <Avatar.Group>
    <Avatar
      img="/images/people/profile-picture-1.jpg"
      rounded
      stacked
      size="xs"
    />
    <Avatar
      img="/images/people/profile-picture-2.jpg"
      rounded
      stacked
      size="xs"
    />
    <Avatar
      img="/images/people/profile-picture-3.jpg"
      rounded
      stacked
      size="xs"
    />
    <Avatar
      img="/images/people/profile-picture-4.jpg"
      rounded
      stacked
      size="xs"
    />
    <Avatar.Counter
    className="text-xs"
    style={{width: "30px", height : "30px"}}
      href="#"
      total={99}
     
      
    />
  </Avatar.Group>
  <div className="flex items-center space-x-2 text-sm text-gray-500">
    <p className='cursor-pointer hover:text-blue-600 hover:underline'>18 comments</p>
    <span>.</span>
    <p className='cursor-pointer hover:text-blue-600 hover:underline'>4 reposts</p>
  </div>  
        </div>
        <hr />
       <LikeComments />
    </div>

  )
}

export default PostCard