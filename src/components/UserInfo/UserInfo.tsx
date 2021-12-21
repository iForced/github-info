import React, {useEffect} from 'react';
import s from "./UserInfo.module.css";
import Image from "next/image";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../redux/store";
import {UserType} from "../../services/types";
import defaultAvatar from '/public/avatar.png'

const UserInfo = () => {

    const dispatch = useDispatch()
    const userInfo = useSelector<AppStateType, UserType | null>(state => state.userRepoReducer.user)

    useEffect(() => {
        dispatch({type: 'FETCH_USER_REQUEST'})
    }, [])

    return (
        <div className={s.user_info}>
            <div className={s.user_avatar}>
                <Image src={userInfo && userInfo.avatar_url ? userInfo.avatar_url : defaultAvatar} width={280} height={280}  />
            </div>
            <div className={s.user_name}>
                {userInfo && userInfo.login ? userInfo.login : 'User not found'}
            </div>
            <div className={s.user_link}>
                <a href={userInfo && userInfo.html_url ? userInfo.html_url : '/'} target={'_blank'}>{userInfo && userInfo.login ? userInfo.login : 'User not found'}</a>
            </div>
            <div className={s.user_followers}>
                <span>
                    <Image src={'/followers-icon.svg'} width={22} height={14} />
                    {userInfo ? userInfo.followers : 'No data'} followers
                </span>
                <span>
                    <Image src={'/following-icon.svg'} width={16} height={16} />
                    {userInfo ? userInfo.following : 'No data'} followed
                </span>
            </div>
        </div>
    );
};

export default UserInfo;