import { auth } from "@/firebase/firebase.config";
import { onAuthStateChanged } from "firebase/auth";
import React, { useMemo, useState } from "react";
import {
  useCreateUserWithEmailAndPassword,
  useSendEmailVerification,
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
 
} from "react-firebase-hooks/auth";
import { toast } from "react-toastify";

type Props = {};

const FirebaseAuthApi = () => {
  const [
    createUserWithEmailAndPassword,
    signUpUser,
    signupLoading,
    signupError,
  ] = useCreateUserWithEmailAndPassword(auth);

  const [signInWithEmailAndPassword, signInUser, signInLoading, signInerror] =
    useSignInWithEmailAndPassword(auth);

  
    const [sendEmailVerification, veryFysending, error] = useSendEmailVerification(auth);
  const [sendPasswordResetEmail, sending, restError] =
    useSendPasswordResetEmail(auth);
  const [successReset, setSuccessReset] = useState(false);

  const signup = async (email: string, password: string) => {
    const res = await createUserWithEmailAndPassword(email, password);
    if (res) {
      sendEmailVerification()
      toast("You have successfully signed up");
    }
  };

  const login = async (email: string, password: string) => {
    const res = await signInWithEmailAndPassword(email, password);
    if (res) {
      toast("You have successfully logged in");
    }
  };

  const passwordReset = async (email: string) => {
    const res = await sendPasswordResetEmail(email);
    if (res) {
      setSuccessReset(true);
    }
  };



  return {
    signup,
    signUpUser,
    signupLoading,
    signupError,

    login,
    signInUser,
    signInLoading,
    signInerror,

    passwordReset,
    successReset,
    sending,
    restError,

  };
};

export default FirebaseAuthApi;
