import React from 'react'
import { RotatingLines } from 'react-loader-spinner'

type Props = {}

const PageLoading = (props: Props) => {
  return (
    <div className="h-screen w-full flex items-center justify-center">
        <RotatingLines
  strokeColor="grey"
  strokeWidth="5"
  animationDuration="0.75"
  width="96"
  visible={true}
/>
    </div>
  )
}

export default PageLoading