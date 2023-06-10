import MetaSeo from "@/metaSeo/metaSeo";
import React, { FormEvent, useState } from "react";
import Image from "next/image";
import { useSetRecoilState } from "recoil";
import { useAuthModalState } from "@/recoil/useAuthModalAtom";
import FirebaseAuthApi from "@/firebaseApi/firebaseAuthApi";
import { Spinner } from "flowbite-react";
import { RESET_ERROR } from "@/firebase/errorReset";
import {BsEmojiSmile} from 'react-icons/bs'

type Props = {};

const ResetPassword = (props: Props) => {
  const setModalState = useSetRecoilState(useAuthModalState);
  const [email, setEmail] = useState<string>("");
  const {passwordReset, successReset, sending, restError} = FirebaseAuthApi()
  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await passwordReset(email)
  };

  return (
    <form
      onSubmit={submitHandler}
      className="max-w-sm drop-shadow bg-white rounded-lg p-5 mx-auto flex flex-col space-y-5"
    >
      <MetaSeo title="Linkedin Login, Signin | Linkedin " />
      <Image
        src="/LinkedIn_Logo.svg"
        alt="l"
        width={250}
        height={120}
        className="w-32 inline-block lg:hidden"
      />
      <div className="flex flex-col space-y-1">
        <h1 className="text-4xl font-medium">Forgot password?</h1>
        <p className="text-sm">Reset password in quick steps</p>
      </div>

        {successReset ? (
          <div className="flex items-center space-x-2 justify-center bg-blue-100 py-5">
            <span className="text-xl font-medium">Please check your email</span>
            <BsEmojiSmile className="text-2xl" />
          </div>

        ) : (

         <>
          <div className="flex flex-col space-y-1">
        <label htmlFor="email" className="text-sm">
          Email
        </label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          id="email"
          type="email"
          className="p-1 rounded-lg hover:bg-gray-100 cursor-pointer"
          required
        />
      </div>
      {restError && <p className="text-sm text-red-600">{RESET_ERROR[restError.message as keyof typeof RESET_ERROR]}</p>}
      <button
        type="submit"
        className="w-full rounded-full py-2 text-lg bg-[#0072b1] text-white hover:bg-blue-800 transition-colors duration-100 focus:ring-4 focus:ring-blue-300 font-medium px-5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >
        {sending ? <Spinner /> : " Reset password"}
       
      </button>
         </>
        )}

      
      
      
      <div className="flex items-center justify-center">
        <span
          className="text-gray-600 hover:text-gray-800 hover:underline transition-colors duration-75 cursor-pointer"
          onClick={() => setModalState((prev) => ({ ...prev, view: "login" }))}
        >
          Back
        </span>
      </div>
    </form>
  );
};

export default ResetPassword;
