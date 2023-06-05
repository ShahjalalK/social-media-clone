import { Timestamp } from "firebase/firestore";
import { atom } from "recoil";

export interface UserType {
    uid : string;
    displayName : string | null;
    email : null | string;
    photoURL : string;
    bg : string;
    title : string;
    description : string;
    timestamp? : Timestamp;
}



const defaultData : UserType = {
    uid : "",
    displayName : "" || null,
    email : null || "",
    photoURL : "" ,
    title : "",
    bg : "",
    description : "",
    
} 



export const userDataState = atom <UserType>({
    key : "userData",
    default : defaultData

})

export interface postType {
    
    title : string;
    description : string;
    imageUrl : string;
    postedBy : string;
    createdAt : Timestamp, 
    uid : string;
}