import React, { useState } from "react";
import Image from "next/image";
import { AiOutlineHeart } from "react-icons/ai";
import { FaRegCommentDots, FaCaretDown } from "react-icons/fa";
import { MdOutlineRepeat } from "react-icons/md";
import Comment from "./comment";


type Props = {};

const LikeComments = (props: Props) => {
    const [showComment, setShowComment] = useState(false)
  return (
    <div className="flex flex-col space-y-5">
      <div className="flex items-center justify-between">
        <Image
          src="/images.png"
          alt="u"
          width={50}
          height={50}
          className="w-9 h-9 rounded-full border object-cover cursor-pointer"
        />

        <div className="cursor-pointer px-2 py-3 hover:bg-gray-200 text-gray-600 rounded flex items-center space-x-1">
          <AiOutlineHeart className="text-2xl" />
          <p>Like</p>
        </div>

        <div className="cursor-pointer px-2 py-3 hover:bg-gray-200 text-gray-600 rounded flex items-center space-x-1" onClick={() => setShowComment(!showComment)}>
          <FaRegCommentDots className="text-2xl" />
          <p>Comment</p>
        </div>

        <div className="cursor-pointer px-2 py-3 hover:bg-gray-200 text-gray-600 rounded flex items-center space-x-1">
          <MdOutlineRepeat className="text-2xl" />
          <p>Repost</p>
        </div>
      </div>
      <div className={`${showComment ? "flex" : "hidden"} flex-col space-y-5`}>
        <div className="flex flex-grow items-center space-x-2">
          <Image src="/images.png" alt="u" width={40} height={40} />
          <input
            type="text"
            placeholder="Add a comment..."
            className="flex-grow border border-gray-400 rounded-full p-2 focus:ring-1 focus:ring-gray-400 focus:border-gray-400 "
          />
        </div>
        <p className="text-sm text-gray-600 flex items-center space-x-0 cursor-pointer"><span>Most recent</span> <FaCaretDown className="text-xl" /></p>
        <Comment />
      </div>
    </div>
  );
};

export default LikeComments;
