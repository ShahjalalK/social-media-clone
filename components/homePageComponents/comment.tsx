import React from 'react'
import Image from 'next/image'
import { commentType } from '@/recoil/postAtom'
import {MdDelete} from 'react-icons/md'
import Moment from 'react-moment'
import {parseCookies} from "nookies"
import { useRecoilValue } from 'recoil'
import { UserState } from '@/recoil/userAuthAtom'
import { deleteDoc, doc } from 'firebase/firestore'
import { firestore } from '@/firebase/firebase.config'

type Props = {
  comment : any,
  postId : string
}

const Comment = ({comment, postId}: Props) => {
  const cookie = parseCookies()
  const userCookie = cookie.user ? JSON.parse(cookie.user) : ""
  const userValue = useRecoilValue(UserState)
  const deleteComment = async (id : string) => {
    const deleteRef = doc(firestore, `posts/${postId}/comments/${id}`)
   await deleteDoc(deleteRef)
    
  }
  return (
    <div className="flex items-start space-x-2 ">
    <Image src={comment.data().photoURL} alt='s' width={30} height={30} className="rounded-full border object-cover w-9 h-9" />
    <div className="bg-gray-200 rounded p-3 flex flex-col space-y-2 flex-grow">
    <div className="flex items-start justify-between">
        <div>
        <h4 className=" capitalize font-medium text-sm">{comment.data().displayName || comment.data().email?.split("@")[0]}</h4>
        <p className='text-sm text-gray-500 line-clamp-1'>{comment.data().title || "Edit your profile" }</p>
        </div>
        <div className="flex items-center space-x-1">
        <p className="text-sm text-gray-600"><Moment fromNow>{comment.data().timeStamp?.toDate()}</Moment></p>   
       {(comment.data().token === userValue.token || comment.data().myToken === userCookie.token)  &&  <MdDelete onClick={() => deleteComment(comment.id)} className="text-xl text-gray-700 cursor-pointer" />} 
    </div>
        
    </div>
    <p className="text-sm">{comment.data().comment}</p>
    
    </div>
</div>
  )
}

export default Comment