import React from "react";
import PostAdd from "./postadd";
import PostCard from "./postcard";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { AllPostData, postType } from "@/recoil/postAtom";


type Props = {};

const HomeCenterSide = (props: Props) => {
  const allPostValue = useRecoilValue(AllPostData)


  const  getRandomItem = (arr : any) => {

    // get random index value
    const randomIndex = Math.floor(Math.random() * arr.length);
  
    // get random item
    const item = arr[randomIndex];
  
    return item;
  }
  
  const array = [allPostValue];
  
  const result = getRandomItem(array);

  
  return (
    <div className="lg:col-span-2 flex flex-col space-y-5 mx-auto">
      <PostAdd />

      {result.map((item : postType,) => (
        <PostCard key={item.uid} post={item} />
      ))}
            
    </div>
  );
};

export default HomeCenterSide;
