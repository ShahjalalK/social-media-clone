import { atom } from "recoil"

interface usepostModelType {
    open : boolean,
    view : "content" | "media"
}

const defaultModal : usepostModelType ={
    open : false,
    view : "content"
}

export const usePostModalState = atom<usepostModelType>({
    key : "usePostModalState",
    default : defaultModal
})