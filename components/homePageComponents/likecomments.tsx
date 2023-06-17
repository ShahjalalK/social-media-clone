import React, { useEffect, useState } from "react";
import Image from "next/image";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { FaRegCommentDots, FaCaretDown } from "react-icons/fa";
import { MdOutlineRepeat } from "react-icons/md";
import Comment from "./comment";
import FirebasePostApi from "@/firebaseApi/firebasePostApi";
import { useRecoilValue } from "recoil";
import { UserState } from "@/recoil/userAuthAtom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/firebase/firebase.config";
import { toast } from "react-toastify";


type Props = {
  postId : string;
  comments : any
  uid : string,
  likes : any
};

const LikeComments = ({likes, uid, comments, postId}: Props) => {
  const {commentPost, likePost} = FirebasePostApi()  
  const userValue = useRecoilValue(UserState)
  const [user, loading, error] = useAuthState(auth)

 
    const [showComment, setShowComment] = useState<boolean>(false)
    

    const [hashLiked, setHashLiked] = useState<boolean>(false)
    
  console.log("Liked", hashLiked)
  console.log("likeId", likes.map((item : any) => item.id))
  

    const [comment, setComment] = useState<string>("")
  
  

  const commentHandler = async (e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if(!user?.emailVerified){
      return toast("Please verify your email address")
    }
    const commentToSend = comment
    setComment("")
    await commentPost(commentToSend, postId )
  }

  useEffect(() => {
    setHashLiked(likes.some((like : any) => like.data().uid === userValue.uid))
  }, [likes])

  const likeHandler = async () => {
    if(!user?.emailVerified){
      return toast("Please verify your email address")
    }
    await likePost(postId, hashLiked)
    setShowComment(true)
  }
   

  return (
    <div className="flex flex-col space-y-5">
      <div className="flex items-center justify-between">
        <Image
          src={userValue.photoURL}
          alt="u"
          width={50}
          height={50}
          className="w-9 h-9 rounded-full border object-cover cursor-pointer"
        />

      <div onClick={likeHandler} className="cursor-pointer px-2 py-3 hover:bg-gray-200 text-gray-600 rounded flex items-center space-x-1">
         {hashLiked ? <AiFillHeart className="text-2xl text-[#FF3040]" /> : <AiOutlineHeart className="text-2xl" />} 
          <p>Like</p>
        </div>

        

        <div className="cursor-pointer px-2 py-3 hover:bg-gray-200 text-gray-600 rounded flex items-center space-x-1" onClick={() => setShowComment(!showComment)}>
          <FaRegCommentDots className="text-2xl" />
          <p>Comment</p>
        </div>

        <div className="cursor-pointer px-2 py-3 hover:bg-gray-200 text-gray-600 rounded flex items-center space-x-1">
          <MdOutlineRepeat className="text-2xl" />
          <p>Repost</p>
        </div>
      </div>
      <div className={`${showComment ? "flex" : "hidden"} flex-col space-y-5`}>
        <div className="flex flex-grow items-center space-x-2">
          <Image src={userValue.photoURL} alt="u" width={50} height={50} className=" rounded-full w-12 h-12 object-cover border" />
          <form onSubmit={commentHandler} className=" relative w-full">
          <input
          value={comment}
          onChange={(e) => setComment(e.target.value)}
            type="text"
            placeholder="Add a comment..."
            className="flex-grow border border-gray-400 rounded-full p-2 focus:ring-1 focus:ring-gray-400 focus:border-gray-400 w-full"
          />
          <button type="submit" className={`${!comment.trim( ) ? "hidden" : " inline-flex"} rounded-full px-5 py-2 bg-blue-600 hover:bg-blue-800 text-white font-medium absolute top-[50%] right-1 -translate-y-[50%] text-sm`} disabled={!comment.trim( )}>Post</button>
          </form>
        </div>
        {comments.length > 0 && <p className="text-sm text-gray-600 flex items-center space-x-0 cursor-pointer"><span>Most recent</span> <FaCaretDown className="text-xl" /></p>}
        <div className="flex flex-col space-y-3">
           {comments.map((comment : any) => (
            <Comment key={comment.id} uid={uid} postId={postId} commentId={comment.id} comment={comment} />
           ))}
           </div>
       
      </div>
    </div>
  );
};

export default LikeComments;
