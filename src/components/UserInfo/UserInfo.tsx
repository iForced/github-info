import React from 'react';
import s from "./UserInfo.module.css";
import Image from "next/image";
import defaultAvatar from '/public/avatar.png'
import {useSelector} from "react-redux";
import {AppStateType} from "../../redux/store";
import {UserType} from "../../redux/types";
import Link from 'next/link';

const UserInfo = () => {

    const user = useSelector<AppStateType, UserType>(state => state.userRepoReducer.user)

    return (
        <div className={s.user_info}>
            <div className={s.user_avatar}>
                <Image src={user.avatar_url || defaultAvatar} height={300} width={300} />
            </div>
            <h1 className={s.user_name}>
                {user.login || 'User not found'}
            </h1>
            <div className={s.user_link}>
                <a href={user.html_url}>{user.login || 'User not found'}</a>
            </div>
            <div className={s.user_followers}>
                <span>{user.following} following</span>
                <span>{user.followers} followers</span>
            </div>
            <Link href={user.login ? `/userRepos/${user.login}` : '/404'}>
                <a className={s.repos_link}>{user.login ? `Show ${user.login}'s repos` : 'User not found'}</a>
            </Link>
        </div>
    );
};

export default UserInfo;