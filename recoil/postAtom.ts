
import { Timestamp } from "firebase/firestore";
import { atom } from "recoil";

export interface postType {
    content : string;
    title : string;
    displayName : string;
    photoURL : string;
    email : string;
    uid : string;
    media : string;
    timestamp : Timestamp;
    postId : string;
    token : string;
    previewImage : string

}

export interface addPostType {
    content : string;
    title : string;
    displayName : string;
    photoURL : string;
    email : string;
    uid : string;
    media : File;
    timestamp : Timestamp;
    postId : string;
    token : string;
    previewImage : string

}

export interface likeType {
    photoURL : string;
    uid : string;
    title : string;
    postId : string;
    email : string;
    displayName : string;
    
}

export interface commentType{
    comment : string,
    displayName : string,
    photoURL : string,
    uid : string,
    timeStamp : Timestamp,
    title : string
}

const defaultAddPostData : addPostType = {
    content : "",
    postId : "",
    title : "",
    displayName : "",
    previewImage : "",
    photoURL : "",
    email :" ",
    uid : "",
    media : {} as File,
    timestamp : Timestamp as any,
    token : ""
   
}

const defaultPostData : postType = {
    content : "",
    postId : "",
    title : "",
    displayName : "",
    previewImage : "",
    photoURL : "",
    email :" ",
    uid : "",
    media : "",
    timestamp : Timestamp as any,
    token : ""
   
}

export const addPostData = atom<addPostType>({
    key : "addPostData",
    default : defaultAddPostData
})

export const PostData = atom<postType>({
    key : "PostData",
    default : defaultPostData
})

export const AllPostData = atom<postType[]>({
    key : "AllPostData",
    default : []
})




