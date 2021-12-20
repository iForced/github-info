import {RepoType, UserType} from "../../services/types";
import {ActionTypes} from "../actions";

const initialState: InitialStateType = {
    user: null,
    repos: [] as Array<RepoType>
}

export const userRepoReducer = (state: InitialStateType = initialState, action: ActionTypes): InitialStateType => {
    switch (action.type) {

        case "SET_USER":
            return {
                ...state,
                user: action.payload.user
            }

        case "SET_REPOS":
            return {
                ...state,
                repos: action.payload.repos
            }

        default:
            return state
    }
}

type InitialStateType = {
    user: UserType | null
    repos: Array<RepoType>
}