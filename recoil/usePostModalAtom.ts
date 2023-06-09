import { atom } from "recoil"

interface usepostModelType {
    open : boolean,
    view : "post"
}

const defaultModal : usepostModelType ={
    open : false,
    view : "post"
}

export const usePostModalState = atom<usepostModelType>({
    key : "usePostModalState",
    default : defaultModal
})