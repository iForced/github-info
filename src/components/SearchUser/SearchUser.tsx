import React from 'react';
import s from "./SearchUser.module.css";

const SearchUser = () => {
    return (
        <div className={s.search}>
            <input className={s.search_input} type="text" placeholder='Search users'/>
        </div>
    );
};

export default SearchUser;