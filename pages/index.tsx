import AlartWithValidation from '@/components/alartWithValidation'
import HomeCenterSide from '@/components/homePageComponents/homecenterside'
import HomeLeftSide from '@/components/homePageComponents/homeleftside'

import HomeRightSide from '@/components/homePageComponents/homerightside'
import { auth, firestore } from '@/firebase/firebase.config'
import FirebaseFireStoreApi from '@/firebaseApi/firebaseFirestoreApi'
import FirebasePostApi from '@/firebaseApi/firebasePostApi'
import MetaSeo from '@/metaSeo/metaSeo'
import { AllLikeData, AllPostData } from '@/recoil/postAtom'
import React, {  useCallback, useEffect, useMemo } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useRecoilValue } from 'recoil'

type Props = {}

const Home = (props: Props) => {
  const [user, loading, error] = useAuthState(auth);
  const allPost = useRecoilValue(AllPostData)
  const allLike = useRecoilValue(AllLikeData)
  const {userQuery} = FirebaseFireStoreApi()
  const {getAllPost} = FirebasePostApi()

 

  useEffect(() => {
    getAllPost() 
    userQuery()  
    
  }, [firestore])

 


  return (
   <>
   <MetaSeo title="Feed | Linkedin" />
    <div className="padding-section container grid grid-cols-1 lg:grid-cols-4 items-start gap-5">
      {!user?.emailVerified && (
       <div className=" col-span-1 lg:col-span-4">
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