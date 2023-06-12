import { firestore } from "@/firebase/firebase.config";
import { PostData } from "@/recoil/postAtom";
import { usePostModalState } from "@/recoil/usePostModalAtom";
import { UserState } from "@/recoil/userAuthAtom";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { Spinner } from "flowbite-react";
import React, { useState } from "react";
import { BsImage, BsFillCameraVideoFill } from "react-icons/bs";
import { FiCalendar, FiMoreHorizontal } from "react-icons/fi";
import { ImTextWidth } from "react-icons/im";
import { toast } from "react-toastify";
import { useRecoilValue, useResetRecoilState, useSetRecoilState } from "recoil";

type Props = {};

const SubmitPost = (props: Props) => {
    const userValue = useRecoilValue(UserState)
    const postValue = useRecoilValue(PostData)
    const resetPostValue = useResetRecoilState(PostData);
  const setPostModal = useSetRecoilState(usePostModalState);
  const [loading, setLoading] = useState<boolean>(false)
  const submitHandler = async () => {
    setLoading(true)

    try {
        const collectionRef = collection(firestore, "posts");
        if(postValue.content){
           const res = await addDoc(collectionRef, {
          content: postValue.content,
          title : userValue.title,
          media: postValue.media,
          photoURL : userValue.photoURL,
          displayName: userValue.displayName,
          email : userValue.email,
          uid: userValue.uid,      
          timestamp: serverTimestamp(),
          token : userValue.token
        })
        if(res){
            resetPostValue()
           
            toast("Post added successfully")
        }
        setPostModal((prev) => ({
          ...prev,
          open : false
      }))
        }
        
    } catch (error) {
        console.log(error)
        
    }

   
    setLoading(false)
   
  };
  return (
    <div className="flex items-center justify-between flex-grow">
      <div className="flex items-center space-x-5">
        <div
          onClick={() => {
            setPostModal((prev) => ({
              ...prev,
              view: "content",
            }));
          }}
          className="w-14 h-14 rounded-full flex justify-center items-center hover:drop-shadow hover:border hover:shadow-md cursor-pointer"
        >
          <ImTextWidth className="text-2xl" />
        </div>
        <div
          onClick={() => {
            setPostModal((prev) => ({
              ...prev,
              view: "media",
            }));
          }}
          className="w-14 h-14 rounded-full flex justify-center items-center hover:drop-shadow hover:border hover:shadow-md cursor-pointer"
        >
          <BsImage className="text-2xl" />
        </div>
        <div
          onClick={() => {
            setPostModal((prev) => ({
              ...prev,
              view: "media",
            }));
          }}
          className="w-14 h-14 rounded-full flex justify-center items-center hover:drop-shadow hover:border hover:shadow-md cursor-pointer"
        >
          <BsFillCameraVideoFill className="text-2xl" />
        </div>

        <div className="w-14 h-14 rounded-full flex justify-center items-center hover:drop-shadow hover:border hover:shadow-md cursor-pointer">
          <FiMoreHorizontal className="text-2xl" />
        </div>
      </div>
      <div>
        <button
        disabled={postValue.content.length < 1}
          onClick={submitHandler}
          className={`px-5 py-2 w-20 rounded-full ${postValue.content.length > 0 ? "text-white bg-blue-700 hover:bg-blue-800" : " bg-gray-300 text-gray-400 cursor-not-allowed "} font-medium`}
        >
            {loading ? <Spinner /> : "Post"}
         
        </button>
      </div>
    </div>
  );
};

export default SubmitPost;
