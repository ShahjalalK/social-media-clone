import React from 'react'
import Image from 'next/image'
import {MdDelete} from 'react-icons/md'
import { commentType } from '@/recoil/postAtom'
import Moment from 'react-moment'
import { deleteDoc, doc } from 'firebase/firestore'
import { firestore } from '@/firebase/firebase.config'
import { parseCookies } from 'nookies'
import {useRouter} from 'next/router'
type Props = {
  postId : string;
  commentId : string;
  comment : any,
  uid : string
}

const Comment = ({uid, postId, commentId, comment}: Props) => {

  const deleteHandler = async () => {
    const deleteRef = doc(firestore, "posts", postId, "comments", commentId )
    await deleteDoc(deleteRef)
  }
  const cookies = parseCookies()
  const userCookie = cookies.user ? JSON.parse(cookies.user) : ""
  
  const router = useRouter()


  return (
    <div className="flex items-start space-x-2 ">
    <Image src={comment.data().photoURL} alt='s' width={30} height={30} className="rounded-full border object-cover w-9 h-9" />
    <div className="bg-gray-200 rounded p-3 flex flex-col space-y-2 flex-grow">
    <div className="flex items-start justify-between">
        <div>
        <h4 className=" capitalize font-medium cursor-pointer text-sm" onClick={() => router.push(`/in/${comment.data().uid}`)}>{comment.data().displayName || comment.data().email.split("@")[0]}</h4>
        <p className='text-sm text-gray-500 line-clamp-1'>{comment.data().title || "Edit your profile"}</p>
        </div>
        <div className="flex items-center space-x-1 whitespace-nowrap">          
        <p className="text-sm text-gray-600"><Moment fromNow>{comment.data().timeStamp?.toDate()}</Moment></p>   
      {(userCookie.uid === uid || comment.data().uid === userCookie.uid)  ? <MdDelete onClick={deleteHandler} className="text-xl text-gray-700 cursor-pointer" /> : ""}  
    </div>
        
    </div>
    <p className="text-sm">{comment.data().comment}</p>
    
    </div>
</div>
  )
}

export default Comment