import AlartWithValidation from '@/components/alartWithValidation'
import LeftSide from '@/components/userProfile/leftSide'
import RightSide from '@/components/userProfile/rightSide'
import { auth, firestore } from '@/firebase/firebase.config'
import FirebaseFireStoreApi from '@/firebaseApi/firebaseFirestoreApi'
import React, { useEffect, useMemo, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useRouter } from 'next/router'
import { useRecoilValue } from 'recoil'
import { QueryState, UserState } from '@/recoil/userAuthAtom'
import MetaSeo from '@/metaSeo/metaSeo'
import { collection, onSnapshot, orderBy, query, where } from 'firebase/firestore'

type Props = {}

const ProfileId = (props: Props) => {
  const userValue = useRecoilValue(UserState)
  const queryUserValue = useRecoilValue(QueryState)
  const router = useRouter()
  const [user, loading, error] = useAuthState(auth);
  const {userQuery, userPidQuery} = FirebaseFireStoreApi()
  const [queryPosts, setQueryPosts] = useState([])

  console.log("postQuery", queryPosts)


  const pid = router.query.pid as string

  useEffect(() => {
    if(pid === userValue.uid){
      userPidQuery(userValue.uid as string)
    }else{
      userPidQuery(pid as string)
    }   
    
  }, [firestore])

  useEffect(() => {
    userQuery()  
    
  }, [firestore])
  

  useEffect(() => {
    const q = query(collection(firestore, "posts"), where("uid", "==", pid), orderBy("timestamp", "desc"))
    onSnapshot(q, (snapshot) => {
      setQueryPosts(snapshot.docs as any)
    })
  }, [firestore])



  return (
    <section className="padding-section container grid grid-cols-1 lg:grid-cols-3 gap-5">
        <MetaSeo title={`${queryUserValue.displayName || queryUserValue.email.split("@")[0]} | Linkedin`} />
        {!user?.emailVerified && (
       <div className=" col-span-1 lg:col-span-4">        
       <AlartWithValidation />
     </div>
      )
      }
      {queryUserValue.uid ?
      
        (
          <>
           <LeftSide queryPosts={queryPosts} />
          <RightSide />
          </>
        )
         : 
        (
          <div>
            <h1>User Not Found</h1>
          </div>
        )
    }
    </section>
  )
}

export default ProfileId