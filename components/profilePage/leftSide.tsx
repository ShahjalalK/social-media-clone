import React from 'react'
import PostCard from './postCard'
import PostAdd from './postAdd'
import { auth } from '@/firebase/firebase.config';
import { useAuthState } from 'react-firebase-hooks/auth';
import { UserType } from '@/recoil/userAtom';


 type Props = {
  
 }
const LeftSide = ({} : Props) => {
  const [user, loading, error] = useAuthState(auth);
  return (
    <div className="col-span-2 flex flex-col space-y-5">
     <PostAdd />
      <PostCard  />
       
        
    </div>
  )
}

export default LeftSide