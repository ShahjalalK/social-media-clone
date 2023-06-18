import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import {
  MdOutlineNotificationsNone,
  MdNotificationsActive,
  MdOutlineDone,
} from "react-icons/md";
import { HiOutlineArrowTopRightOnSquare } from "react-icons/hi2";
import { BsFillSendFill } from "react-icons/bs";
import { BiPlus } from "react-icons/bi";
import { Avatar } from "flowbite-react";
import { MdOutlineModeEdit } from "react-icons/md";
import { VscEdit } from "react-icons/vsc";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { QueryState, UserState } from "@/recoil/userAuthAtom";
import { parseCookies } from "nookies";
import { editProfileState } from "@/recoil/editProfileAtom";
import ConnectionApi from "@/firebaseApi/connectionApi";
import { auth, firestore } from "@/firebase/firebase.config";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import {useRouter} from 'next/router'
import { toast } from "react-toastify";
import { useAuthState } from "react-firebase-hooks/auth";

type Props = {};

const ProfileCard = (props: Props) => {
  const [notify, setNotify] = useState(false);
  const router = useRouter()
  const [follows, setFollows] = useState([]);
  const [hashFollow, setHashFollow] = useState<boolean>(false);
  const queryUserValue = useRecoilValue(QueryState);
  const userValue = useRecoilValue(UserState);
  const setProfileState = useSetRecoilState(editProfileState);
  const { followUser } = ConnectionApi();
  const cookies = parseCookies();
  const userCookie = cookies.user ? JSON.parse(cookies.user) : "";
const [user, userLoading, error] = useAuthState(auth)

  const BgHandler = () => {
    setProfileState((prev) => ({
      ...prev,
      open: true,
      view: "bgImage",
    }));
  };

  const ProfilePhotoHandaler = () => {
    setProfileState((prev) => ({
      ...prev,
      open: true,
      view: "profileImage",
    }));
  };

  const ProfileInfoHandaler = () => {
    setProfileState((prev) => ({
      ...prev,
      open: true,
      view: "profileInfo",
    }));
  };

  const followHandler = async () => {
    if(!user?.emailVerified){
      return toast("Please verify your email address")
    }
    followUser(queryUserValue.uid, hashFollow);
  };

  useEffect(() => {
    onSnapshot(
      query(collection(firestore, "users", queryUserValue.uid, "following"), orderBy("timeStamp", "desc")),
      (snapshot) => {
        setFollows(snapshot.docs as any);
      }
    );
  }, [firestore]);

  useEffect(() => {
    setHashFollow(
      follows.some((follow: any) => follow.data().uid === userValue.uid)
    );
  }, [follows]);

  return (
    <div className="bg-white rounded-lg shadow-md border border-gray-300">
      <div className="bg-gray-300 rounded-lg overflow-hidden w-full h-52 relative">
        {userCookie.token == queryUserValue.token && (
          <div
            onClick={BgHandler}
            className="bg-white/95 rounded-full w-8 h-8 absolute top-3 right-3 flex items-center justify-center text-blue-700 cursor-pointer text-xl hover:text-gray-600"
          >
            <MdOutlineModeEdit />
          </div>
        )}

        {queryUserValue.bgURL && (
          <Image
            src={queryUserValue.bgURL}
            width={750}
            height={300}
            alt="bg"
            className="w-full h-full object-fill z-10"
          />
        )}
      </div>
      <div className="flex items-center justify-between px-5">
        <Image
          onClick={ProfilePhotoHandaler}
          src={queryUserValue.photoURL}
          width={300}
          height={300}
          alt="u"
          className="w-32 h-32 rounded-full border -mt-20 z-20 cursor-pointer"
        />

        {userCookie.token == queryUserValue.token ? (
          <div
            className="text-2xl w-10 h-10 flex items-center justify-center hover:bg-gray-200 rounded-full cursor-pointer"
            onClick={ProfileInfoHandaler}
          >
            <VscEdit />
          </div>
        ) : (
          <div>
            {notify ? (
              <MdOutlineNotificationsNone
                className="text-3xl text-gray-600 cursor-pointer"
                onClick={() => setNotify(!notify)}
              />
            ) : (
              <MdNotificationsActive
                className="text-3xl text-gray-600 cursor-pointer"
                onClick={() => setNotify(!notify)}
              />
            )}
          </div>
        )}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-1 px-5 pb-8">
        <div className=" col-span-1 lg:col-span-2 flex flex-col space-y-3">
          <div>
            <h1 className="text-2xl font-medium capitalize">
              {queryUserValue.displayName || queryUserValue.email.split("@")[0]}{" "}
            </h1>
            <p>{queryUserValue.title}</p>
          </div>
          {queryUserValue.location && (
            <p className="flex space-x-2 items-center">
              <span>{queryUserValue.location}</span>{" "}
              <span className="text-blue-700 cursor-pointer">Contact info</span>
            </p>
          )}

          {queryUserValue.webURL && (
            <div className="flex">
              <Link
                href={queryUserValue.webURL}
                target="_blank"
                className=" flex items-center space-x-1 text-blue-800 hover:underline "
              >
                <span>LET’S WORK TOGETHER!</span>{" "}
                <HiOutlineArrowTopRightOnSquare />{" "}
              </Link>
            </div>
          )}

          <p className="flex items-center space-x-5">
            <span className="text-sm text-gray-500">
              {follows.length} followers{" "}
            </span>{" "}
            <span className="text-blue-700 text-sm font-medium hover:underline cursor-pointer">
              {follows.length} connections
            </span>
          </p>
          <div className="flex items-center space-x-2">
            <div className="flex -space-x-4">
              {follows.slice(0, 3).map((item: any) => (
                <Image
                  key={item.id}
                  className="w-7 h-7 border bg-white rounded-full dark:border-gray-800"
                  src={item.data().photoURL}
                  alt="p"
                  width={50}
                  height={50}
                />
              ))}
            </div>

            {follows.length > 0 ? (
              <span className=" capitalize text-blue-700 text-sm hover:underline cursor-pointer">
              {follows.slice(0, 1).map((item: any) => <span className="hidden lg:inline-flex" key={item.id}>{(item.data().displayName || item.data().email.split("@")[0])}</span>)} and {follows.length} other mutual connections
              </span>
            )
          :
          (
            <span className=" capitalize text-blue-700 text-sm hover:underline cursor-pointer">0 connections</span>
          )
          }
          </div>
          <div className="flex items-center space-x-5">
            {userCookie.token === queryUserValue.token ? (
              <>
                <button className="px-3 py-1 bg-blue-600  text-white font-medium rounded-full flex items-center space-x-1 hover:bg-blue-800 whitespace-nowrap">
                  {" "}
                  Open to
                </button>
                <button className="px-3 py-1 border border-blue-600  text-blue-600 font-medium rounded-full flex items-center space-x-1 hover:bg-blue-100 whitespace-nowrap">
                  {" "}
                  Add profile section
                </button>
                <button className="px-3 hidden md:inline-flex py-1 border border-gray-600  text-gray-600 font-medium rounded-full hover:bg-gray-300 hover:ring-1 hover:ring-gray-600 whitespace-nowrap">
                  More
                </button>
              </>
            ) : (
              <>
                {hashFollow ? (
                  <button
                    onClick={followHandler}
                    className="px-3 py-1 border bg-blue-600 hover:bg-blue-800 text-white font-medium rounded-full flex items-center space-x-1"
                  >
                    {" "}
                    <MdOutlineDone /> <span>Following</span>
                  </button>
                ) : (
                  <button
                    onClick={followHandler}
                    className="px-3 py-1 border bg-blue-600 hover:bg-blue-800 text-white font-medium rounded-full flex items-center space-x-1"
                  >
                    {" "}
                    <BiPlus /> <span>Follow</span>
                  </button>
                )}
                <button onClick={() => router.push("/messaging")} className="px-3 py-1 border border-blue-600  text-blue-600 font-medium rounded-full flex items-center space-x-1 hover:bg-blue-100">
                  {" "}
                  <BsFillSendFill /> <span>Message</span>
                </button>
                <button className="px-3 py-1 border border-gray-600  text-gray-600 font-medium rounded-full hover:bg-gray-300 hover:ring-1 hover:ring-gray-600">
                  More
                </button>
              </>
            )}
          </div>
        </div>
        <div className="hidden lg:inline-block"></div>
      </div>
    </div>
  );
};

export default ProfileCard;
