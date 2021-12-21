import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import s from "./SearchUser.module.css";
import {useDispatch} from "react-redux";
import {setUserSearchTerm} from "../../redux/actions";

const SearchUser = () => {

    const dispatch = useDispatch()

    const [searchValue, setSearchValue] = useState<string>('')

    const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.currentTarget.value)
    }
    const handleEnterPress = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && searchValue) {
            dispatch(setUserSearchTerm(searchValue))
            dispatch({type: 'FETCH_USER_REQUEST'})
            dispatch({type: 'FETCH_REPOS_REQUEST'})
            setSearchValue('')
        }
    }

    return (
        <div className={s.search}>
            <input
                className={s.search_input}
                type="text"
                placeholder='Search users'
                value={searchValue}
                onChange={handleSearch}
                onKeyPress={handleEnterPress}
            />
        </div>
    );
};

export default SearchUser;