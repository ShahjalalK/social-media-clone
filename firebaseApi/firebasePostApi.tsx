import { firestore } from '@/firebase/firebase.config'
import { AllLikeData, AllPostData, likeType, postType } from '@/recoil/postAtom'
import { UserState } from '@/recoil/userAuthAtom'
import { collection, deleteDoc, doc, onSnapshot, orderBy, query, setDoc, where } from 'firebase/firestore'
import React from 'react'
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import safeJsonStringify from 'safe-json-stringify'


const FirebasePostApi = () => {

  
  const setAllPost = useSetRecoilState<postType[]>(AllPostData)
  const userValue = useRecoilValue(UserState)
  const [likes, setLikes] = useRecoilState<likeType[]>(AllLikeData)
 
  const likeRef = collection(firestore, "likes")
 
 
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

   const LikePost = ( postId : string) => {
     try {
      const docToLike = doc(likeRef, `${postId}_${userValue.uid}`)
     setDoc(docToLike, {
      photoURL : userValue.displayName,
      uid : userValue.uid,
      title : userValue.title,
      postId,
      email : userValue.email,
      displayName : userValue.displayName,
     })
      
     } catch (error : any) {
      console.log(error.message)
      
     }
   }

   const getLikeByUser = () => {
    try {
      // let likeQuery = query(likeRef)
      onSnapshot(likeRef, (res) => {
        setLikes(
          res.docs.map((item) => {
            return {...item.data() as likeType}
          })
        )
       
      })
    } catch (error : any) {
      console.log(error.message)
    }

   }

   
   
  return {
    getAllPost,
    LikePost,
    getLikeByUser
  }
}

export default FirebasePostApi