import LeftSide from '@/components/profilePage/leftSide'
import RightSide from '@/components/profilePage/rightSide'
import { auth, firestore } from '@/firebase/firebase.config';
import { UserType, userDataState } from '@/recoil/userAtom';
import { doc, getDoc } from 'firebase/firestore';
import { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useRecoilState } from 'recoil';
import {useRouter} from 'next/router'
import NotFound from '@/components/profilePage/notfound';


type Props = {
  
}

const ProfileId = ({}: Props) => { 
  const [user, userLoading, error] = useAuthState(auth);
  const [userDataValue, setUserState] = useRecoilState<UserType>(userDataState)
 
  const router = useRouter()


 useEffect(() => {
  
  if(user){
    
    const getUserDocRef = doc(firestore, `users/${router.query.profileId as string}`)
    getDoc(getUserDocRef).then((res) => {
      
      setUserState(res.data() as UserType)    
      
    })
   
  }
 }, [user])

 if(!userDataValue){
  return <NotFound />
 }


  
  return (
    <div className="max-w-5xl mx-auto py-5">
        <div className="grid grid-cols-3 items-start gap-5">
            <LeftSide  />
            <RightSide />
        </div>
    </div>
  )
}

export default ProfileId




