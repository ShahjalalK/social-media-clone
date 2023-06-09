import React from 'react'
import LeftSide from './leftside'
import RightSide from './rightside'

type Props = {}

const Navbar = (props: Props) => {
  return (
    <header className="bg-white fixed top-0 left-0 w-full z-50 shadow">
       <div className="container  flex items-center flex-grow space-x-10 ">
       <LeftSide />
       <RightSide /> 
       </div>
    </header>
  )
}

export default Navbar

