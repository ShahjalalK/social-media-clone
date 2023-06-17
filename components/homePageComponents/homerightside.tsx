import React, { useEffect, useState } from 'react'
import Sujest from './sujest'
import Link from 'next/link'
import {BsArrowRight} from 'react-icons/bs'
import { useRecoilValue } from 'recoil'
import { AllUserState, UserState, userType } from '@/recoil/userAuthAtom'
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import { auth, firestore } from '@/firebase/firebase.config'
import { useAuthState } from 'react-firebase-hooks/auth'

type Props = {}

const HomeRightSide = (props: Props) => {
  const allUserValue = useRecoilValue(AllUserState)
  const userValue = useRecoilValue(UserState)
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
    <div className="bg-white rounded-lg shadow p-2 border border-gray-300 flex flex-col space-y-5">
      <div className="flex items-center justify-between">
        <p className="font-medium">Add to your feed</p>
        <span className="w-4 h-4 text-white flex items-center justify-center cursor-pointer font-medium bg-gray-500 rounded text-sm">i</span>
      </div>
     <div className="flex flex-col space-y-2">
    {
     result.filter((filst : userType) => filst.uid != userValue.uid).splice(0, 3).map((item : userType) => 
     <Sujest key={item.uid} item={item}/>
     )
        
    }


       
     </div>
    <div>
    <Link href="/mynetwork" className="inline-flex items-center space-x-1 text-sm px-3 text-gray-500 hover:bg-gray-200"><span>View all recommendations</span> <BsArrowRight /> </Link>
    </div>
    </div>
  )
}

export default HomeRightSide