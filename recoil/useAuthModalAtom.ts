import {atom} from 'recoil'
interface authModalState {
    open : boolean,
    view : "login" | "signup" | "resetPassword" | "editProfile" | "post"
}

const defaultState : authModalState = {
    open : false,
    view : "login"
}

export const useAuthModalState = atom<authModalState>({
    key : "useAuthModalState",
    default : defaultState
})