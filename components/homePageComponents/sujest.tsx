import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { BiPlus } from "react-icons/bi";
import { UserState, userType } from "@/recoil/userAuthAtom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, firestore } from "@/firebase/firebase.config";
import FirebaseAuthApi from "@/firebaseApi/firebaseAuthApi";
import ConnectionApi from "@/firebaseApi/connectionApi";
import { toast } from "react-toastify";
import { useRecoilValue } from "recoil";
import { useRouter } from "next/router";
import { MdOutlineDone } from "react-icons/md";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";

type Props = {
  item: userType; 
};

const Sujest = ({ item }: Props) => {
  const [user] = useAuthState(auth);
  const { followUser } = ConnectionApi();
  const [follows, setFollows] = useState([]);
  const userValue = useRecoilValue(UserState);
  const router = useRouter();

  const [hashFollow, setHashFollow] = useState<boolean>(false)



  useEffect(() => {
    onSnapshot(
      query(collection(firestore, "users", item.uid as string, "following"), orderBy("timeStamp", "desc")),
      (snapshot) => {
        setFollows(snapshot.docs as any);
      }
    );
  }, [firestore]);

  useEffect(() => {
    setHashFollow(follows.some((item : any) => item.id === userValue.uid)) 
  }, [follows])

  const followHandler = async () => {
    if (!user?.emailVerified) {
      return toast("Please verify your email address");
    }
    followUser(item.uid, hashFollow);
  };

  return (
    <div className="flex items-start space-x-2">
      <Image
        onClick={() => router.push(`/in/${item.uid}`)}
        src={item.photoURL}
        alt="s"
        width={50}
        height={50}
        className="rounded-full w-10 h-10 object-cover cursor-pointer"
      />
      <div>
        <h3
          onClick={() => router.push(`/in/${item.uid}`)}
          className="line-clamp-1 text-sm font-medium cursor-pointer"
        >
          {item.displayName || item.email.split("@")[0]}
        </h3>
        <p className="text-sm line-clamp-2">{item.title}</p>
        {hashFollow ? (
          <button
            className="px-3 mt-1 py-1 rounded-full border border-gray-600 text-gray-500 font-medium flex items-center space-x-1 hover:ring-1 hover:ring-gray-600"
            onClick={followHandler}
          >
            <MdOutlineDone /> <span>following</span>
          </button>
        ) : (
          <button
            className="px-3 mt-1 py-1 rounded-full border border-gray-600 text-gray-500 font-medium flex items-center space-x-1 hover:ring-1 hover:ring-gray-600"
            onClick={followHandler}
          >
            <BiPlus /> <span>Follow</span>
          </button>
        )}
      </div>
    </div>
  );
};

export default Sujest;
