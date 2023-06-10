import { atom } from "recoil"

interface editProfileType {
    open : boolean,
    view : "bgImage" | "profileImage" | "profileInfo"
}

const defaultProfileState : editProfileType = {
    open : false,
    view : "bgImage"
}


export const editProfileState = atom<editProfileType>({
    key : "editProfileState",
    default : defaultProfileState

})
