import {AnyAction} from "redux";
import {HYDRATE} from "next-redux-wrapper";
import {RepoType, UserType} from "../types";

const initialState: InitialStateType = {
    user: {} as UserType,
    repos: [] as Array<RepoType>,
    userSearchTerm: '',
    reposPerPage: 5,
    pageNumber: 1,
}

export const userRepoReducer = (state: InitialStateType = initialState, action: AnyAction): InitialStateType => {
    switch (action.type) {

        case HYDRATE:
            return {...state, ...action.payload};

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

        case "SET_USER_SEARCH_TERM":
            return {
                ...state,
                userSearchTerm: action.payload.searchTerm
            }

        case "SET_PAGE":
            return {
                ...state,
                pageNumber: action.payload.pageNumber
            }

        default:
            return state
    }
}

type InitialStateType = {
    user: UserType
    repos: Array<RepoType>
    userSearchTerm: string
    reposPerPage: number
    pageNumber: number
}