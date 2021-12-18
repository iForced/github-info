import React from 'react';
import s from "./UserInfo.module.css";
import Image from "next/image";

const UserInfo = () => {
    return (
        <div className={s.user_info}>
            <div className={s.user_avatar}>
                <Image src='/sfsdf' width={280} height={280} />
            </div>
            <div className={s.user_name}>
                Valera Valeron
            </div>
            <div className={s.user_link}>
                <a href="vk.com">valera</a>
            </div>
            <div className={s.user_followers}>
                <span>182 followers</span><span>88 followed</span>
            </div>
        </div>
    );
};

export default UserInfo;