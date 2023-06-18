import React from 'react'
import LeftSide from './leftside'
import RightSide from './rightside'

type Props = {}

const Navbar = (props: Props) => {
  return (
    <header className="bg-white sticky top-0 left-0 w-full z-50 shadow">
       <div className="container relative flex items-center justify-between flex-grow space-x-3 lg:space-x-10 whitespace-nowrap">
       <LeftSide />
       <RightSide /> 
       </div>
    </header>
  )
}

export default Navbar

