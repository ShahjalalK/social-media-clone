import { auth } from "@/firebase/firebase.config";
import { signOut } from "firebase/auth";
import { Avatar, Dropdown } from "flowbite-react";
import React from "react";
import { AiFillHome } from "react-icons/ai";
import { FaUserFriends, FaRegCommentDots } from "react-icons/fa";
import { IoMdNotifications } from "react-icons/io";
import Cookies from "js-cookie";

type Props = {};

const UserMenu = (props: Props) => {
  const signOutHandler = async () => {
    await signOut(auth)
    Cookies.remove("user")
    Cookies.remove("token")
  }

  return (
    <div className="flex space-x-3">
      <div className="text-center text-white opacity-95 cursor-pointer hover:opacity-100">
        <AiFillHome className="text-3xl" />
      </div>
      <div className="text-center text-white opacity-95 cursor-pointer">
        <FaUserFriends className="text-3xl" />
      </div>
      <div className="text-center text-white opacity-95 cursor-pointer">
        <FaRegCommentDots className="text-3xl" />
      </div>
      <div className="text-center text-white opacity-95 cursor-pointer">
        <IoMdNotifications className="text-3xl" />
      </div>
      <Dropdown label={<Avatar size="sm" rounded />} inline={true} arrowIcon={false}>
        <Dropdown.Item>Dashboard</Dropdown.Item>
        <Dropdown.Item>Settings</Dropdown.Item>
        <Dropdown.Item>Earnings</Dropdown.Item>
        <Dropdown.Item onClick={signOutHandler }>Sign out</Dropdown.Item>
      </Dropdown>
    </div>
  );
};

export default UserMenu;
