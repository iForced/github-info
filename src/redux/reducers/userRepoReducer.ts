import {UserType} from "../../services/types";
import {ActionTypes} from "../actions";

const initialState: InitialStateType = {
    user: null
}

export const userRepoReducer = (state: InitialStateType = initialState, action: ActionTypes): InitialStateType => {
    switch (action.type) {

        case "SET_USER":
            return {
                ...state,
                user: action.payload.user
            }

        default:
            return state
    }
}

type InitialStateType = {
    user: UserType | null
}