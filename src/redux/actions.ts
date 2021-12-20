import {UserType} from "../services/types";

export const fetchUserRequest = () => {
    return {
        type: 'FETCH_USER_REQUEST',
    }
}

export const setUser = (user: UserType) => {
    return {
        type: 'SET_USER',
        payload: {
            user,
        }
    }
}

export type ActionTypes =
    ReturnType<typeof setUser>