import Noneed from '@/components/noneed'
import { firestore } from '@/firebase/firebase.config'
import FirebaseFireStoreApi from '@/firebaseApi/firebaseFirestoreApi'
import MetaSeo from '@/metaSeo/metaSeo'
import React, { useEffect } from 'react'

type Props = {}

const Notifications = (props: Props) => {
  const {userQuery} = FirebaseFireStoreApi()

  useEffect(() => {
    userQuery()  
    
  }, [firestore])
  return (
    <>
    <MetaSeo title='Notifications | Linkedin' />
    <Noneed title='Notifications' />
    </>
  )
}

export default Notifications