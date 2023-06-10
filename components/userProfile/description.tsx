import { UserState } from '@/recoil/userAuthAtom'
import React from 'react'
import { useRecoilValue } from 'recoil'

type Props = {}

const Description = (props: Props) => {
  const userValue = useRecoilValue(UserState)
  return (
    <div className="bg-white rounded-lg shadow border-gray-300 px-5 py-2 flex flex-col space-y-1 ">
            <h1 className="text-xl">About</h1>
            <p>{userValue.description}</p>
    </div>
  )
}

export default Description