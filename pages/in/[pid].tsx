import LeftSide from '@/components/userProfile/leftSide'
import RightSide from '@/components/userProfile/rightSide'
import React from 'react'

type Props = {}

const ProfileId = (props: Props) => {
  
  return (
    <section className="padding-section container grid grid-cols-1 lg:grid-cols-3 gap-5">
        <LeftSide />
        <RightSide />
    </section>
  )
}

export default ProfileId