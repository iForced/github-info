import React, {useEffect} from 'react';
import s from "./UserRepos.module.css";
import RepoItem from "../RepoItem/RepoItem";
import Paginator from "../Paginator/Paginator";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../redux/store";
import {RepoType} from "../../services/types";

const UserRepos = () => {

    const dispatch = useDispatch()
    const repos = useSelector<AppStateType, Array<RepoType>>(state => state.userRepoReducer.repos)
    const reposCount = useSelector<AppStateType, number>(state => state.userRepoReducer.user.public_repos)

    useEffect(() => {
        dispatch({type: 'FETCH_REPOS_REQUEST'})
    }, [])

    return (
        <div className={s.user_repos}>
            {
                repos.length
                    ? <>
                        <div className={s.repos_count}>
                            Repositories ({reposCount || 'No data'})
                        </div>
                        <div className={s.repos_list}>
                            {
                                repos.map(repo =>
                                    <RepoItem
                                        key={repo.id}
                                        name={repo.name}
                                        description={repo.description}
                                        url={repo.html_url}
                                    />)
                            }
                        </div>
                        <Paginator/>
                    </>
                    : <span>Repos not found</span>
            }

        </div>
    );
};

export default UserRepos;