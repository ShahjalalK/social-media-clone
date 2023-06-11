import React from "react";
import PostAdd from "./postadd";
import PostCard from "./postcard";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { AllPostData } from "@/recoil/postAtom";

type Props = {};

const HomeCenterSide = (props: Props) => {
  const allPostValue = useRecoilValue(AllPostData)
  console.log(allPostValue)
  
  return (
    <div className="lg:col-span-2 flex flex-col space-y-5 ">
      <PostAdd />
      {allPostValue.map((item) => (
        <PostCard post={item} />
      ))}
        
     
      
      
    </div>
  );
};

export default HomeCenterSide;
