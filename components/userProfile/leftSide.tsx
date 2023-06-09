import React from "react"
import ProfileCard from "./profileCard"
import Description from "./description"
import Featured from "./featured"


type Props = {}

const LeftSide = (props: Props) => {
 
  return (
    <div className=" col-span-1 lg:col-span-2 flex flex-col space-y-5">
       <ProfileCard />
     <Featured />
     <Description />
    </div>
  )
}

export default LeftSide