import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {useRouter} from "next/router"
import {IoCloseSharp} from 'react-icons/io5'
import { UserState, userType } from '@/recoil/userAuthAtom'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth, firestore } from '@/firebase/firebase.config'
import ConnectionApi from '@/firebaseApi/connectionApi'
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import { useRecoilValue } from 'recoil'
import { toast } from 'react-toastify'
import { MdOutlineDone } from 'react-icons/md'
type Props = {
  item : userType
}

const NetworkCard = ({item}: Props) => {
  const router = useRouter()
  const [user] = useAuthState(auth);
  const { followUser } = ConnectionApi();
  const [follows, setFollows] = useState([]);
  const userValue = useRecoilValue(UserState);


  const [hashFollow, setHashFollow] = useState<boolean>(false)



  useEffect(() => {
    onSnapshot(
      query(collection(firestore, "users", item.uid as string, "following"), orderBy("timeStamp", "desc")),
      (snapshot) => {
        setFollows(snapshot.docs as any);
      }
    );
  }, [firestore]);

  useEffect(() => {
    setHashFollow(follows.some((item : any) => item.id === userValue.uid)) 
  }, [follows])

  const followHandler = async () => {
    if (!user?.emailVerified) {
      return toast("Please verify your email address");
    }
    followUser(item.uid, hashFollow);
  };

  return (
    <div className="bg-white rounded-lg border overflow-hidden hover:shadow-lg hover:drop-shadow h-60">
        <div className="w-full h-20 bg-gray-300 overflow-hidden relative">
            <div className="w-8 h-8 rounded-full bg-black/70 cursor-pointer absolute top-3 right-3 flex items-center justify-center text-white"><IoCloseSharp className="text-xl" /></div>
            <Image src={item.bgURL} alt='bg' width={350} height={300} className="w-full h-full object-fill" />
        </div>
        <Image onClick={() => router.push(`/in/${item.uid}`)} src={item.photoURL} alt='n' width={50} height={50} className="w-16 h-16 rounded-full border object-cover -mt-10 ml-5 relative cursor-pointer"  />
       <div className="px-2 py-2">
       <h1 className="font-medium line-clamp-1 cursor-pointer hover:underline" onClick={() => router.push(`/in/${item.uid}`)}>{item.displayName}</h1>
        <p className="line-clamp-2 text-sm text-gray-500">{item.title}</p>

        {hashFollow ? (
          <button
            className="w-full rounded-full py-1 mt-3 font-medium border border-gray-500 text-gray-600  bg-gray-100 flex items-center space-x-1 justify-center"
            onClick={followHandler}
          >
            <MdOutlineDone /> <span>following</span>
          </button>
        ) : (
          <button className="w-full rounded-full py-1 font-medium border border-blue-500 text-blue-600 hover:bg-blue-100 mt-3" onClick={followHandler}>Follow</button>
        )}
        

       </div>
    </div>
  )
}

export default NetworkCard