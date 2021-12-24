export type UserType = {
    id: number
    login: string
    avatar_url: string
    html_url: string
    followers: number
    following: number
    public_repos: number
}
export type RepoType = {
    id: number
    name: string
    description: string
    html_url: string
    full_name: string
    owner: {
        login: string
        html_url: string
    }
    has_issues: boolean
}