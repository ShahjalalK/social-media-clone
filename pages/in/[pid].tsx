import AlartWithValidation from '@/components/alartWithValidation'
import LeftSide from '@/components/userProfile/leftSide'
import RightSide from '@/components/userProfile/rightSide'
import { auth } from '@/firebase/firebase.config'
import FirebaseFireStoreApi from '@/firebaseApi/firebaseFirestoreApi'
import React, { useMemo } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useRouter } from 'next/router'
import { useRecoilValue } from 'recoil'
import { UserState } from '@/recoil/userAuthAtom'
import MetaSeo from '@/metaSeo/metaSeo'

type Props = {}

const ProfileId = (props: Props) => {
  const userValue = useRecoilValue(UserState)
  const router = useRouter()
  const [user, loading, error] = useAuthState(auth);
  const {userPidQuery} = FirebaseFireStoreApi()


  const pid = router.query.pid as string

  useMemo(() => {

    userPidQuery(pid as string)
    
  }, [])



  return (
    <section className="padding-section container grid grid-cols-1 lg:grid-cols-3 gap-5">
        <MetaSeo title={`${userValue.displayName || userValue.email.split("@")[0]} | Linkedin`} />
        {!user?.emailVerified && (
       <div className=" col-span-1 lg:col-span-4">
       <AlartWithValidation />
     </div>
      )
      }
      {userValue.uid ?
      
        (
          <>
           <LeftSide />
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