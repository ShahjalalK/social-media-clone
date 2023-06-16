import { firestore } from '@/firebase/firebase.config'
import { QueryState, UserState } from '@/recoil/userAuthAtom'
import { deleteDoc, doc, serverTimestamp, setDoc } from 'firebase/firestore'
import React from 'react'
import { useRecoilValue } from 'recoil'

type Props = {}

const ConnectionApi = () => {
    const userValue = useRecoilValue(UserState)
    const queryUserValue = useRecoilValue(QueryState)
    const followUser = async (userId : string, hashFollow : boolean) => {
        const followingRef = doc(firestore, "users", userId, "following", userValue.uid)
        const followersRef = doc(firestore, "users", userValue.uid, "followers", userId)
       
       if(hashFollow){

          await deleteDoc(followingRef)
          await deleteDoc(followersRef)

        }else{

          await setDoc(followingRef, {
            displayName : userValue.displayName,
            photoURL : userValue.photoURL,
            uid : userValue.uid,
            timeStamp : serverTimestamp(),
            title : userValue.title,
            email : userValue.email,
            userId
        })
        await setDoc(followersRef, {
          displayName : queryUserValue.displayName,
          photoURL : queryUserValue.photoURL,
          uid : queryUserValue.uid,
          timeStamp : serverTimestamp(),
          title : queryUserValue.title,
          email : queryUserValue.email,
          userId : userValue.uid
      })

        }
     
       
      
    }
  return {
    followUser    
   
  }
}

export default ConnectionApi