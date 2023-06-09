import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import HomeProfileCard from './homeProfileCard'
import AddsCard from '../AddsCard'

type Props = {}

const HomeLeftSide = (props: Props) => {
  return (
    <div className="flex flex-col space-y-5">
      <HomeProfileCard />
      <div className="hidden lg:block">
      <AddsCard />
      </div>
    </div>
  )
}

export default HomeLeftSide