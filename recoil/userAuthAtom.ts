import { atom } from "recoil";

export interface userType {
  uid: string;
  email: string;
  displayName: null | string;
  token: string;
  photoURL: string;
  bgURL: string;
  title: string;
  location: string;
  webURL: string;
  description: string;
}

const defaultState: userType = {
  uid: "",
  email: "",
  displayName: null || "",
  token: "",
  photoURL: "",
  bgURL: "",
  title: "",
  location: "",
  webURL: "",
  description: "",
  
};

export const UserState = atom<userType>({
  key: "userState",
  default : defaultState
});

export const QueryState = atom<userType>({
  key: "queryState",
  default : defaultState
});

export const AllUserState = atom<userType[]>({
  key: "AllUserState",
  default : []
});
