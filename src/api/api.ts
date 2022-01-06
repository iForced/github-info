export const getUser = (userName: string) => {
    return fetch(`${process.env.BASE_URL}/users/${userName}`).then(res => res.json());
};
export const getRepos = (userName: string | string[] | undefined) => {
    return fetch(`${process.env.BASE_URL}/users/${userName}/repos`).then(res => res.json());
};