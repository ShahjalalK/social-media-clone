import { auth } from '@/firebase/firebase.config'
import { Alert } from 'flowbite-react'
import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import {HiInformationCircle} from 'react-icons/hi2'

type Props = {}

const AlartWithValidation = (props: Props) => {
  const [user, loading, error] = useAuthState(auth)
  return (
    <Alert
      color="failure"
      icon={HiInformationCircle}
     className="container"
    >
      <span>
        <p>
          <span className="font-medium">
            Your Email is not verified! 
          </span> &nbsp;
           Please verify your email address- {user?.email}
        </p>
      </span>
    </Alert>
  )
}

export default AlartWithValidation