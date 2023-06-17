import Noneed from '@/components/noneed'
import { firestore } from '@/firebase/firebase.config'
import FirebaseFireStoreApi from '@/firebaseApi/firebaseFirestoreApi'
import MetaSeo from '@/metaSeo/metaSeo'
import React, { useEffect } from 'react'

type Props = {}

const Jobs = (props: Props) => {
  const {userQuery} = FirebaseFireStoreApi()

  useEffect(() => {
    userQuery()  
    
  }, [firestore])
  return (
    <>
    <MetaSeo title="Jobs | Linkedin" />
    <Noneed title="Jobs" />
    </>
  )
}

export default Jobs