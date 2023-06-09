import React from 'react'
import ManageNetwork from './manageNetwork'
import AddsCard from '../AddsCard'

type Props = {}

const LeftSide = (props: Props) => {
  return (
    <div className="hidden lg:flex flex-col space-y-5">
       <ManageNetwork /> 
       <AddsCard />
    </div>
  )
}

export default LeftSide