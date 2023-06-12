import React from 'react'
import Image from 'next/image'
import {BiWorld} from 'react-icons/bi'
import { Avatar } from 'flowbite-react'
import LikeComments from './likecomments'
import { useRecoilValue } from 'recoil'
import { AllPostData, postType } from '@/recoil/postAtom'
import moment from 'moment';
import Link from 'next/link'
import Moment from 'react-moment'

type Props = {
  post : postType
}

const PostCard = ({post}: Props) => {
  console.log("singlePost", post)
  
  return (
    <div className="bg-white rounded-lg shadow border-gray-300 py-3 px-5 flex flex-col space-y-2">
        <Link href="/in/[pid]" as={`/in/${post.uid}`} className="flex items-center space-x-2 cursor-pointer">
            <Image src={post.photoURL} width={70} height={70} alt="p" className="w-14 h-14 rounded-full border object-cover" />
            <div>
                <h4 className="font-medium text-sm hover:text-blue-600 hover:underline">{post.displayName.split("@")[0]}</h4>
                <p className="line-clamp-1 text-sm text-gray-500">{post.title}</p>
                <p className="text-sm text-gray-500 flex items-center space-x-1"><span> <Moment fromNow>{post.timestamp?.toDate()}</Moment> .</span> <BiWorld /></p>
            </div>
        </Link>
        <div>
            <h1 className="text-sm">{post.content}</h1>
           {post.media && <Image src={post.media} width={350} height={350} alt='bg' className='w-full h-auto mt-3' />} 
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