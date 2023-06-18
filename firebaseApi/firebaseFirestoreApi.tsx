import { auth, firestore } from '@/firebase/firebase.config';
import { AllUserState, QueryState, UserState, userType } from '@/recoil/userAuthAtom';
import { collection, onSnapshot, orderBy, query, where } from 'firebase/firestore';
import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { useSetRecoilState } from 'recoil';
import safeJsonStringify from 'safe-json-stringify';

type Props = {}

const FirebaseFireStoreApi = () => {
    const [user, loading, error] = useAuthState(auth);
    const setUserState = useSetRecoilState<userType>(UserState)
    const setQueryState = useSetRecoilState<userType>(QueryState)
    const setAllUserState = useSetRecoilState<userType[]>(AllUserState)


   const userQuery = () => {
    const queryRef = query(collection(firestore, "users"), where("uid", "==", user?.uid as string))
  
    onSnapshot(queryRef, (res) => {
      res.docs.map((item) => {
        setUserState(JSON.parse(safeJsonStringify(item.data() as userType)))
      })
    })
   }

   const userPidQuery = (pid : string) => {
    const queryRef = query(collection(firestore, "users"), where("uid", "==", pid as string))
  
    onSnapshot(queryRef, (res) => {
      res.docs.map((item) => {
        setQueryState(JSON.parse(safeJsonStringify(item.data() as userType)))
      })
    })
   }

   const getAllUser = () => {
    const postRef = query(collection(firestore, "users" ), orderBy("timeStamp", "desc"))
      onSnapshot(postRef, (snapshot) => {
        setAllUserState(snapshot.docs.map((item) => {
          return item.data() as userType
        }))
      })
   }

  

  return {
    userQuery, userPidQuery, getAllUser
  }
}

export default FirebaseFireStoreApi