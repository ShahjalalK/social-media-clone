import { firestore } from '@/firebase/firebase.config'
import { AllLikeData, AllPostData, likeType, postType } from '@/recoil/postAtom'
import { UserState } from '@/recoil/userAuthAtom'
import { addDoc, collection, deleteDoc, doc, onSnapshot, orderBy, query, serverTimestamp, setDoc, where } from 'firebase/firestore'
import React from 'react'
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import safeJsonStringify from 'safe-json-stringify'


const FirebasePostApi = () => {

  
  const setAllPost = useSetRecoilState<postType[]>(AllPostData)
  const userValue = useRecoilValue(UserState)
  const [likes, setLikes] = useRecoilState<likeType[]>(AllLikeData)
 
 
 
   const getAllPost = () => {
    const postRef = query(collection(firestore, "posts" ), orderBy("timestamp", "desc"))
    onSnapshot(postRef, (res) => {
     setAllPost(
      res.docs.map((post : any) => {
        return { postId : post.id, ...post.data()}
      })
     )    
    })
   }

   const commentPost = async (comment : string, postId : string) => {
     try {
      const postToRef = collection(firestore, "posts", postId, "comments" )
     await addDoc(postToRef, {
              comment,
              displayName : userValue.displayName,
              photoURL : userValue.photoURL,
              uid : userValue.uid,
              timeStamp : serverTimestamp(),
              title : userValue.title,
              email : userValue.email,
      })
      
     } catch (error : any) {
      console.log(error.message)
      
     }
   }



   
   
  return {
    getAllPost,
    commentPost
  }
}

export default FirebasePostApi