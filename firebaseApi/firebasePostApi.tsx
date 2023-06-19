import { firestore } from '@/firebase/firebase.config'
import { AllPostData, postType } from '@/recoil/postAtom'
import { UserState } from '@/recoil/userAuthAtom'
import { addDoc, collection, deleteDoc, doc, onSnapshot, orderBy, query, serverTimestamp, setDoc } from 'firebase/firestore'
import React from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'


const FirebasePostApi = () => {

  
  const [allPost, setAllPost] = useRecoilState<postType[]>(AllPostData)
  const userValue = useRecoilValue(UserState)
 
 
 
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

   const likePost = async ( postId : string, hashLiked : boolean) => {
     const likeRef = doc(firestore, "posts", postId, "likes", userValue.uid)
     if(hashLiked){
      await deleteDoc(likeRef)

     }else{
      await setDoc(likeRef, {
        displayName : userValue.displayName,
        photoURL : userValue.photoURL,
        uid : userValue.uid,
        timeStamp : serverTimestamp(),
        title : userValue.title,
        email : userValue.email,
       })

     }
    

   }



   
   
  return {
    getAllPost,
    commentPost,
    likePost
  }
}

export default FirebasePostApi