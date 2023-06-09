import LeftSide from '@/components/myNetworkComponents/leftSide'
import RightSide from '@/components/myNetworkComponents/rightSide'
import React from 'react'

type Props = {}

const MyNetwork = (props: Props) => {
  return (
    <section className="padding-section container grid grid-cols-1 lg:grid-cols-3 gap-5"> 
      <LeftSide />
      <RightSide />

    </section>
  )}

export default MyNetwork