import { Timestamp } from "firebase/firestore";

export interface PostType {
    status : string;
    id : string,
    email : string,
    uid : string,
    timestamp : Timestamp
}