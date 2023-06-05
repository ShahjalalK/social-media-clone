import HomeLeft from "@/components/homePage/homeLeft";
import HomeRight from "@/components/homePage/homeRight";
import MySelf from "@/components/homePage/mySelf";
import PostAdd from "@/components/profilePage/postAdd";
import PostCard from "@/components/profilePage/postCard";
import TopPost from "@/components/profilePage/topPost";
import { auth, firestore } from "@/firebase/firebase.config";
import { UserType, userDataState } from "@/recoil/userAtom";
import { collection, doc, getDoc, onSnapshot, query, where } from "firebase/firestore";
import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useSetRecoilState } from "recoil";





type Props = {
 
  
};

const Home = ({}: Props) => {
  const [user, userLoading, error] = useAuthState(auth);
  const setUserState = useSetRecoilState(userDataState)
  
 useEffect(() => {
  
  if(user){
    
    const getUserDocRef = doc(firestore, `users/${user?.uid}`)
    getDoc(getUserDocRef).then((res) => {
      
      setUserState(res.data() as UserType)
      
    })
   
  }
 }, [user])


 

 
  return (
    <div className="max-w-5xl py-5 mx-auto grid grid-cols-9 items-start gap-5">
      <div className="col-span-2 flex flex-col space-y-3">
        {user &&   <HomeLeft  />}
       

        <MySelf />
      </div>
      <div className=" col-span-4 flex flex-col flex-grow space-y-5">        
      {user  && <PostAdd />}
        <TopPost />
        <PostCard  />

        
      </div>
      <div className="col-span-3">
        <HomeRight  />
      </div>
    </div>
  );
};

export default Home;











