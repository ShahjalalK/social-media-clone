import React, { useMemo, useState } from 'react'
import Image from 'next/image'
import {BiWorld} from 'react-icons/bi'
import { Avatar } from 'flowbite-react'
import LikeComments from './likecomments'
import { useRecoilValue } from 'recoil'
import { AllLikeData, AllPostData, postType } from '@/recoil/postAtom'
import Link from 'next/link'
import Moment from 'react-moment'
import FirebasePostApi from '@/firebaseApi/firebasePostApi'
import { UserState } from '@/recoil/userAuthAtom'

type Props = {
  post : postType
}

const PostCard = ({post}: Props) => {
  const userValue = useRecoilValue(UserState)
  const likeValue = useRecoilValue(AllLikeData)
  
  return (
    <div className="bg-white rounded-lg shadow border-gray-300 py-3 px-5 flex flex-col space-y-2">
        <Link href="/in/[pid]" as={`/in/${post.uid}`} className="flex items-center space-x-2 cursor-pointer">
            <Image src={post.photoURL} width={70} height={70} alt="p" className="w-14 h-14 rounded-full border object-cover" />
            <div>
                <h4 className="font-medium text-sm hover:text-blue-600 hover:underline capitalize">{post.displayName || post.email.split("@")[0]}</h4>
                <p className="line-clamp-1 text-sm text-gray-500">{post.title || "Edit your profile"}</p>
                <p className="text-sm text-gray-500 flex items-center space-x-1"><span> <Moment fromNow>{post.timestamp?.toDate()}</Moment> .</span> <BiWorld /></p>
            </div>
        </Link>
        <div>
            <h1 className="text-sm">{post.content}</h1>
           {post.media && <Image src={post.media} width={350} height={350} alt='bg' className='w-full h-auto mt-3' />} 
        </div>
        <div className="flex items-center justify-between">
        <Avatar.Group>
          {likeValue.map((item) => (
               <Avatar
               img={item.photoURL}
               rounded
               stacked
               size="xs"
             />
            
          ))}
   
    
    
    <Avatar.Counter
    className="text-xs"
    style={{width: "30px", height : "30px"}}
      href="#"
      total={likeValue.length}
     
      
    />
  </Avatar.Group>
  <div className="flex items-center space-x-2 text-sm text-gray-500">
    <p className='cursor-pointer hover:text-blue-600 hover:underline'>43 comments</p>
    <span>.</span>
    <p className='cursor-pointer hover:text-blue-600 hover:underline'>4 reposts</p>
  </div>  
        </div>
        <hr />
       <LikeComments postId={post.postId} token={post.token}   />
    </div>

  )
}

export default PostCard