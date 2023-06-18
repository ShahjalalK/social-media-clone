import React from "react";
import Business from "./business";
import UserMenu from "./userMenu";

type Props = {};

const RightSide = (props: Props) => {
 
  return (
    <div className=" flex-grow-0 lg:flex-grow flex items-center space-x-4 justify-end">
      <UserMenu />

      <Business />
    </div>
  );
};

export default RightSide;
