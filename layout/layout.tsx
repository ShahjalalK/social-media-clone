import Navbar from "@/components/navbar/navbar";
import { useAuthState } from "react-firebase-hooks/auth";
import React, { useEffect, useMemo, useState } from "react";
import { auth, firestore } from "@/firebase/firebase.config";
import AuthModal from "@/components/modal/authModal";
import PageLoading from "@/components/pageLoading";
import AlartWithValidation from "@/components/alartWithValidation";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import Cookies from "js-cookie";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  const [user, loading, error] = useAuthState(auth);
  const [token, setToken] = useState<string>("")

  const userDocRef = doc(firestore, `users/${user?.uid}`)


  useMemo(() => {

    onAuthStateChanged(auth, (data) => {
      data?.getIdToken().then((token) => {
        setToken(token)
      })
    })

  }, [])
  
  
  
useEffect(() => {
 if(user){
  
  getDoc(userDocRef).then((res) => {
    if(res.exists()){
      return;
    }else{
      setDoc(userDocRef, {
        uid : user?.uid,
        email : user.email,
        displayName : user.displayName,
        token,
        photoURL : user.photoURL || "https://firebasestorage.googleapis.com/v0/b/blog-82ecc.appspot.com/o/images.png?alt=media&token=f27bb769-5e4d-4ffd-b1da-cb3eb3fbadea&_gl=1*1e2kztu*_ga*NzEyNzYzNy4xNjc2NzAyOTIy*_ga_CW55HF8NVT*MTY4NjM5NjExMy4xMTIuMS4xNjg2Mzk2MjcwLjAuMC4w",
        bgURL : "https://firebasestorage.googleapis.com/v0/b/blog-82ecc.appspot.com/o/linkedin-bg.webp?alt=media&token=b106672d-abe4-4122-b34b-c035e8564131&_gl=1*1wi9qsu*_ga*NzEyNzYzNy4xNjc2NzAyOTIy*_ga_CW55HF8NVT*MTY4NjQxMzM2NC4xMTQuMS4xNjg2NDEzNTQ5LjAuMC4w",
        title : "",
        location : "",
        webURL : "",
        description : ""
      })

     
      
    }
  }
  )
 }

}, [user])

useEffect(() => {
  if(token){
    updateDoc(userDocRef, {
      token,
    })
    Cookies.set("user", JSON.stringify({
      email : user?.email,
      token,
      uid: user?.uid
    }))
  }else{
  Cookies.remove("user")
  }

}, [token])

  return (
    <main>
      {user ? (
        loading ? (
          <PageLoading />
        ) : (
          <>
            <Navbar />           
            {children}
          </>
        )
      ) : loading ? (
        <PageLoading />
      ) : (
        <AuthModal />
      )}
    </main>
  );
};

export default Layout;
