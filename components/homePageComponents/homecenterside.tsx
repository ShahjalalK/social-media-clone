import React from "react";
import PostAdd from "./postadd";
import PostCard from "./postcard";

type Props = {};

const HomeCenterSide = (props: Props) => {
  return (
    <div className="lg:col-span-2 flex flex-col space-y-5 ">
      <PostAdd />
      <PostCard />
      <PostCard />
      <PostCard />
    </div>
  );
};

export default HomeCenterSide;
