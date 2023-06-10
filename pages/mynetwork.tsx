import AlartWithValidation from '@/components/alartWithValidation'
import LeftSide from '@/components/myNetworkComponents/leftSide'
import RightSide from '@/components/myNetworkComponents/rightSide'
import { auth } from '@/firebase/firebase.config'
import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'

type Props = {}

const MyNetwork = (props: Props) => {
  const [user, loading, error] = useAuthState(auth);
  return (
    <section className="padding-section container grid grid-cols-1 lg:grid-cols-3 gap-5"> 
    {!user?.emailVerified && 
   ( <div className=" col-span-1 lg:col-span-3">
    <AlartWithValidation />
  </div>)
    }
      
      <LeftSide />
      <RightSide />

    </section>
  )}

export default MyNetwork