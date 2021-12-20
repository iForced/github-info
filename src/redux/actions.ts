import {RepoType, UserType} from "../services/types";

export const setUser = (user: UserType) => {
    return {
        type: 'SET_USER',
        payload: {
            user,
        }
    } as const
}
export const setRepos = (repos: Array<RepoType>) => {
    return {
        type: 'SET_REPOS',
        payload: {
            repos,
        }
    } as const
}

export type ActionTypes =
    ReturnType<typeof setUser>
    | ReturnType<typeof setRepos>