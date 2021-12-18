import React from 'react';
import s from './User.module.css'
import UserInfo from "../UserInfo/UserInfo";
import UserRepos from "../UserRepos/UserRepos";

const User = () => {
    return (
        <div className={s.user}>
            <UserInfo />
            <UserRepos />
        </div>
    );
};

export default User;