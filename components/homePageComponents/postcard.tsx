import React, { useEffect, useMemo, useState } from 'react'
import Image from 'next/image'
import {BiWorld} from 'react-icons/bi'
import { Avatar } from 'flowbite-react'
import LikeComments from './likecomments'
import { useRecoilValue } from 'recoil'
import {AllPostData, postType } from '@/recoil/postAtom'
import Link from 'next/link'
import Moment from 'react-moment'
import FirebasePostApi from '@/firebaseApi/firebasePostApi'
import { UserState } from '@/recoil/userAuthAtom'
import { firestore, storage } from '@/firebase/firebase.config'
import { collection, deleteDoc, doc, onSnapshot, orderBy, query } from 'firebase/firestore'
import { useRouter } from 'next/router'
import { MdDelete } from 'react-icons/md'
import { deleteObject, ref } from 'firebase/storage'
import { toast } from 'react-toastify'

type Props = {
  post : postType
}

const PostCard = ({post}: Props) => {
const [comments, setComments] = useState([])
const [likes, setLikes] = useState([])
const router = useRouter()
const userValue = useRecoilValue(UserState)

useEffect(() => {
  onSnapshot(query(collection(firestore, "posts", post.postId, "comments"), orderBy("timeStamp", "desc") ), (snapshot) => {
    setComments(snapshot.docs as any)
  } )
}, [firestore, post.postId])

useEffect(() => {
  onSnapshot(query(collection(firestore, "posts", post.postId, "likes"), orderBy("timeStamp", "desc")), (snapshot) => {
    setLikes(snapshot.docs as any)
  })
}, [firestore, post.postId])

const deleteHandler = async() => {
 if(post.uid === userValue.uid) {
  const storageRef = ref(storage, `images/${post.postId}`);
await deleteObject(storageRef).then(() => { 
   
  }).catch((error) => {
    // Uh-oh, an error occurred!
  });
  const deleteRef = doc(firestore, "posts", post.postId)
await deleteDoc(deleteRef).then(() => {
  toast("Post has been deleted")
}).catch((error) => {
  console.log(error.message)
})

 }
}
  
  return (
    <div id={post.postId} className="bg-white rounded-lg shadow border-gray-300 py-3 px-5 flex flex-col space-y-2">
        <div className="flex flex-grow items-start">
        <div onClick={() => {
          router.push(`/in/${post.uid}`)
        }}  className="flex items-center space-x-2 cursor-pointer flex-grow">
            <Image src={post.photoURL} width={70} height={70} alt="p" className="w-14 h-14 rounded-full border object-cover" />
            <div>
                <h4 className="font-medium text-sm hover:text-blue-600 hover:underline capitalize">{post.displayName || post.email.split("@")[0]}</h4>
                <p className="line-clamp-1 text-sm text-gray-500">{post.title || "Edit your profile"}</p>
                <p className="text-sm text-gray-500 flex items-center space-x-1"><span> <Moment fromNow>{post.timestamp?.toDate()}</Moment> .</span> <BiWorld /></p>
            </div>
        </div>
       {post.uid === userValue.uid && <span onClick={deleteHandler}  className="text-xl text-gray-600 cursor-pointer whitespace-nowrap"><MdDelete /></span> } 
        </div>
        <div>
            <h1 className="text-sm">{post.content}</h1>
           {post.media && <Image src={post.media} width={350} height={350} alt='bg' className=' w-full h-auto mx-auto mt-3' />} 
        </div>
        <div className="flex items-center justify-between">
          {likes.length > 0 ? 
          (
            <div className="flex items-center space-x-1">
            

            <div className="flex -space-x-4">
   {likes.slice(0, 3).map((item : any) => (
    <Image key={item.id} className="w-7 h-7 border bg-white rounded-full dark:border-gray-800" src={item.data().photoURL} alt="p" width={50} height={50} /> 
   ) )}
   
</div>

      {likes.length > 0 && <p className="text-gray-500 hover:text-blue-600 hover:underline cursor-pointer text-xs">{likes.slice(0, 1).map((item : any) => (<span key={item.id}>{(item.data().displayName || item.data().email.split("@")[0])}</span>))} and {likes.length} others</p>}
            </div>
          ) 
          : 
          <p>0 likes</p> 
          
        }
       
  <div className="flex items-center space-x-2 text-sm text-gray-500 whitespace-nowrap">
    <p className='cursor-pointer hover:text-blue-600 hover:underline'>{comments.length} comments</p>
    <span>.</span>
    <p className='cursor-pointer hover:text-blue-600 hover:underline'>4 reposts</p>
  </div>  
        </div>
        <hr />

        <LikeComments likes={likes} uid={post.uid} comments={comments} postId={post.postId} />

       
    </div>

  )
}

export default PostCard