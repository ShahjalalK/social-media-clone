import AlartWithValidation from '@/components/alartWithValidation'
import HomeCenterSide from '@/components/homePageComponents/homecenterside'
import HomeLeftSide from '@/components/homePageComponents/homeleftside'

import HomeRightSide from '@/components/homePageComponents/homerightside'
import { auth, firestore } from '@/firebase/firebase.config'
import FirebaseFireStoreApi from '@/firebaseApi/firebaseFirestoreApi'
import FirebasePostApi from '@/firebaseApi/firebasePostApi'
import MetaSeo from '@/metaSeo/metaSeo'
import { UserState } from '@/recoil/userAuthAtom'
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import React, {  useCallback, useEffect, useMemo, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'

type Props = {}

const Home = (props: Props) => {
  const [user, loading, error] = useAuthState(auth);
  
  const {userQuery, getAllUser} = FirebaseFireStoreApi()
  const {getAllPost} = FirebasePostApi()

 

  useEffect(() => {
    getAllPost() 
    
  }, [firestore])

  useEffect(() => {
    userQuery()  
    
  }, [firestore])

  useEffect(() => {
    getAllUser()  
    
  }, [firestore])





  return (
   <>
   <MetaSeo title="Feed | Linkedin" />
    <div className="padding-section container grid grid-cols-1 lg:grid-cols-4 items-start gap-5">
      {!user?.emailVerified && (
       <div className=" col-span-1 lg:col-span-4 z-40">
       <AlartWithValidation />
     </div>
      )
      }
      
      <HomeLeftSide />
      <HomeCenterSide />
      <HomeRightSide />
     
    </div>
   </>
  )
}

export default Home