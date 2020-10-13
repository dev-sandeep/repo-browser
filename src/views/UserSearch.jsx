import React, { useEffect } from 'react'
import SearchForm from '../components/SearchForm'
import UserList from '../components/UserResult'
import MainHeading from '../components/MainHeading'
import { getUser } from './../common/urlCall'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components';

const UserSearch = () => {
    const [userData, setUserData] = React.useState({});
    const dispatch = useDispatch();
    const selector = useSelector(state => state);

    useEffect(() => {
        /**
         * check if the data exists
         */
        if (selector.userId) {
            setUserData(selector.userData);
        }
    }, []);

    const onChangeHandler = (val) => {
        //make an API call
        getUser(val).then((data) => {
            if (Object.keys(data).length > 0) {
                dispatch({ type: 'set-userid', id: data.login });
                setUserData(data);
                //storing the data in rest
                dispatch({ type: 'set-user-data', data: data });
            }
        }, () => {
            console.error("Error occurred");
        });
    }

    return (
        <section id="user-search-page">
            <MainHeading>Search</MainHeading>
            <SearchForm defaultText={selector.userId} onChange={onChangeHandler} placeholder={"Search by github account"} />
            <UserList data={userData} />
        </section>
    );
}
export default UserSearch;