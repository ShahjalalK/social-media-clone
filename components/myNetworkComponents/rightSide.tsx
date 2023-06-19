import React, { useState } from 'react'
import NetworkCard from './networkCard'
import { useRecoilValue } from 'recoil'
import { AllUserState, UserState, userType } from '@/recoil/userAuthAtom'

type Props = {}

const RightSide = (props: Props) => {
  const allUserValue = useRecoilValue(AllUserState)
  const userValue = useRecoilValue(UserState)

 // program to get a random item from an array

const  getRandomItem = (arr : any) => {

  // get random index value
  const randomIndex = Math.floor(Math.random() * arr.length);

  // get random item
  const item = arr[randomIndex];

  return item;
}

const array = [allUserValue];

const result = getRandomItem(array);


 
  return (
    <div className="col-span-1 lg:col-span-2 bg-white shadow rounded-lg border-gray-300 p-3">
        <div className="flex items-center flex-grow text-gray-500">
            <p className="flex-grow">People you follow also follow these people</p>
            <p className="cursor-pointer hover:bg-gray-200 rounded px-3 py-1 whitespace-nowrap">See All</p>           
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 py-3">
        {result.filter((filt : userType) => filt.uid !== userValue.uid).map((item : userType) => (
          <NetworkCard key={item.uid} item={item} />  
          
        ))}
        
                                    
            </div>
            
    </div>
  )
}

export default RightSide