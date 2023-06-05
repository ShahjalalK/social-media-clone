import { auth } from "@/firebase/firebase.config";
import { signOut } from "firebase/auth";
import { Avatar, Dropdown } from "flowbite-react";
import React from "react";
import { AiFillHome } from "react-icons/ai";
import { FaUserFriends, FaRegCommentDots } from "react-icons/fa";
import { IoMdNotifications } from "react-icons/io";
import Cookies from "js-cookie";
import { useRecoilValue } from "recoil";
import { userDataState } from "@/recoil/userAtom";
import Link from "next/link";

type Props = {};

const UserMenu = (props: Props) => {
    const userStateValue = useRecoilValue(userDataState)
    

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
      <Dropdown label={<Avatar img={userStateValue.photoURL} size="sm" rounded className="bg-white rounded-full border" />} inline={true} arrowIcon={false}>
        <Dropdown.Item>
          <Link href="/u/[profileId]" as={`/u/${userStateValue.uid}`}>
            <p className=" font-medium">{userStateValue.displayName || userStateValue.email?.split("@")[0]}</p>
            <p>{userStateValue.email}</p>
          </Link>
        </Dropdown.Item>
        <Dropdown.Item>Settings</Dropdown.Item>
        <Dropdown.Item>Earnings</Dropdown.Item>
        <Dropdown.Item onClick={signOutHandler }>Sign out</Dropdown.Item>
      </Dropdown>
    </div>
  );
};

export default UserMenu;
