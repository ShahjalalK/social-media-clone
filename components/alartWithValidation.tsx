import { Alert } from 'flowbite-react'
import React from 'react'
import {HiInformationCircle} from 'react-icons/hi2'

type Props = {}

const AlartWithValidation = (props: Props) => {
  return (
    <Alert
      color="failure"
      icon={HiInformationCircle}
     className="container"
    >
      <span>
        <p>
          <span className="font-medium">
            Info alert!
          </span>
          Change a few things up and try submitting again.
        </p>
      </span>
    </Alert>
  )
}

export default AlartWithValidation