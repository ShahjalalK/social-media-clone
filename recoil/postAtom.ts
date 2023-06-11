
import { Timestamp, serverTimestamp } from "firebase/firestore";
import { atom } from "recoil";

export interface postType {
    content : string;
    title : string;
    displayName : string;
    photoURL : string;
    email : string;
    uid : string;
    media : string;
}
const defaultPostData : postType = {
    content : "",
    title : "",
    displayName : "",
    photoURL : "",
    email :" ",
    uid : "",
    media : "",
   
}

export const PostData = atom<postType>({
    key : "PostData",
    default : defaultPostData
})

export const AllPostData = atom<postType[]>({
    key : "AllPostData",
    default : []
})