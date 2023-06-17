import Noneed from '@/components/noneed'
import { firestore } from '@/firebase/firebase.config'
import FirebaseFireStoreApi from '@/firebaseApi/firebaseFirestoreApi'
import MetaSeo from '@/metaSeo/metaSeo'
import React, { useEffect } from 'react'

type Props = {}

const Messaging = (props: Props) => {
  const {userQuery} = FirebaseFireStoreApi()

  useEffect(() => {
    userQuery()  
    
  }, [firestore])
  return (
    <>
    <MetaSeo title='Messaging | Linkedin' />
    <Noneed title='Messaging' />
    </>
  )
}

export default Messaging