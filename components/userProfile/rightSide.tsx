import React from 'react'
import AddsCard from '../AddsCard'
import HomeRightSide from '../homePageComponents/homerightside'

type Props = {}

const RightSide = (props: Props) => {
  return (
    <div className="flex flex-col space-y-5">
      <AddsCard />
      <HomeRightSide />
    </div>
  )
}

export default RightSide