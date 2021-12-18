import React from 'react';
import s from "./UserRepos.module.css";
import RepoItem from "../RepoItem/RepoItem";
import Paginator from "../Paginator/Paginator";

const UserRepos = () => {
    return (
        <div className={s.user_repos}>
            <div className={s.repos_count}>
                Repositories (182)
            </div>
            <div className={s.repos_list}>
                <RepoItem />
                <RepoItem />
                <RepoItem />
                <RepoItem />
                <RepoItem />
                <RepoItem />
                <RepoItem />
            </div>
            <Paginator />
        </div>
    );
};

export default UserRepos;