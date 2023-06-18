import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRecoilValue } from 'recoil'
import { UserState } from '@/recoil/userAuthAtom'
import { signOut } from 'firebase/auth'
import { auth, firestore } from '@/firebase/firebase.config'
import Cookies from 'js-cookie'
import { collection, onSnapshot, orderBy, query, where } from 'firebase/firestore'
import { useAuthState } from 'react-firebase-hooks/auth'

type Props = {}

const HomeProfileCard = (props: Props) => {
 const [user, loading, error] = useAuthState(auth)
 const userValue = useRecoilValue(UserState)
 const [followars, setFollowars] = useState([])
 const [following, setFollowing] = useState([])
 
  useEffect(() => {
    if(user?.uid){
      onSnapshot(
        query(collection(firestore, "users", user?.uid as string, "following"), orderBy("timeStamp", "desc")),
        (snapshot) => {
          setFollowars(snapshot.docs as any);
        }
      );
    }
  }, [firestore]);

  useEffect(() => {
    if(user?.uid){

      onSnapshot(
        query(collection(firestore, "users", user?.uid as string, "followers"), orderBy("timeStamp", "desc")),
        (snapshot) => {
          setFollowing(snapshot.docs as any);
        }
      );

    }
    
  }, [firestore]);
  
  return (
    <div className="bg-white shadow border border-gray-300 rounded-lg overflow-hidden">
        <div className="w-full h-32 lg:h-16 bg-gray-200 reletive">
          {userValue.bgURL && <Image src={userValue.bgURL} width={350} height={300} alt='bg' className="w-full h-full object-fill" />}
        </div>
        <Image src={userValue.photoURL} alt="u" width={70} height={70} className="-mt-10 w-20 h-20  object-cover bg-white rounded-full mx-auto drop-shadow " />
        <div className="text-center px-3 pt-1 pb-5 flex flex-col space-y-1">
            <h3 className="font-medium cursor-pointer hover:text-blue-600 hover:underline capitalize"><Link href="/in/[pid]" as={`/in/${userValue.uid}`}>{userValue.displayName || userValue.email.split("@")[0]}</Link></h3>
            <p className="line-clamp-2 text-sm">{userValue.title || "Setup your title..."}</p>
        </div>
        <hr />
        <div className="p-3 flex items-center text-sm text-gray-400  justify-between">
          <span>{followars.length} followers</span>
          <span>{following.length} following</span>
        </div>
        
       
    </div>
  )
}

export default HomeProfileCard