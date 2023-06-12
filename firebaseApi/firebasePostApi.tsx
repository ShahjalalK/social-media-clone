import { firestore } from '@/firebase/firebase.config'
import { AllPostData, postType } from '@/recoil/postAtom'
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import React from 'react'
import { useSetRecoilState } from 'recoil'
import safeJsonStringify from 'safe-json-stringify'

type Props = {}

const FirebasePostApi = () => {
  const setAllPost = useSetRecoilState<postType[]>(AllPostData)
   const getAllPost = () => {
    const postRef = query(collection(firestore, "posts" ), orderBy("timestamp", "desc"))
    onSnapshot(postRef, (res) => {
     setAllPost(
      res.docs.map((post) => {
        return {...post.data() as postType}
      })
     )
    })
   }
  return {
    getAllPost
  }
}

export default FirebasePostApi