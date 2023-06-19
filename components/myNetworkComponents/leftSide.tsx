import React from 'react'
import ManageNetwork from './manageNetwork'
import AddsCard from '../AddsCard'

type Props = {}

const LeftSide = (props: Props) => {
  return (
    <div className="hidden lg:flex flex-col space-y-5">
       <ManageNetwork /> 
      <div className="lg:sticky lg:top-16">
      <AddsCard />
      </div>
    </div>
  )
}

export default LeftSide