import {UserType} from "./types";

const baseURL = 'https://api.github.com'

export const getUser = (userName: string): Promise<UserType> => {
    return fetch(`${baseURL}/users/${userName}`).then(response => response.json())
}