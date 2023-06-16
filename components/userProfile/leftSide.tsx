import React from "react"
import ProfileCard from "./profileCard"
import Description from "./description"
import Featured from "./featured"
import { useRecoilValue } from "recoil"
import { QueryState } from "@/recoil/userAuthAtom"


type Props = {}

const LeftSide = (props: Props) => {
  const queryUserValue = useRecoilValue(QueryState)
 
  return (
    <div className=" col-span-1 lg:col-span-2 flex flex-col space-y-5">
       <ProfileCard />
     <Featured />
     {queryUserValue.description && <Description />}
     
    </div>
  )
}

export default LeftSide