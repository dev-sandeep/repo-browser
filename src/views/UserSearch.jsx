/**
 * responsible for loading the details of an user on search
 * @author Sandeep G
 * @since 20201014
 */
import React, { useEffect } from 'react'
import SearchForm from '../components/SearchForm'
import UserList from '../components/UserResult'
import MainHeading from '../components/MainHeading'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { getUser } from './../common/urlCall'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'

const UserSearchSection = styled.section`
background: #1C4C7D;
`;
const UserSearch = () => {
    const [userData, setUserData] = React.useState({});
    const [isLoading, setIsLoading] = React.useState(false);
    const dispatch = useDispatch();
    const selector = useSelector(state => state);

    useEffect(() => {
        /**
         * check if the data exists
         */
        if (selector.userId) {
            setUserData(selector.userData);
        }
    }, [selector.userId, selector.userData]);

    const onChangeHandler = (val) => {
        //make an API call
        setIsLoading(true);
        dispatch({ type: 'set-userid', id: val });
        getUser(val).then((data) => {
            if (Object.keys(data).length > 0) {
                setUserData(data);
                //storing the data in rest
                dispatch({ type: 'set-user-data', data: data });
                setIsLoading(false);
            }
        }, () => {
            setUserData({});
            setIsLoading(false);
        });
    }

    return (
        <UserSearchSection>
            <MainHeading>Search</MainHeading>
            <SearchForm defaultText={selector.userId} onChange={onChangeHandler} placeholder={"Search by github account"} />
            
            <Loader isLoading={isLoading}>
                {typeof userData == 'object' && Object.keys(userData).length > 0?(
                    <UserList data={userData} />
                ):(
                    <Message text={selector.userId?'No such user exists':'Search an user'} />
                )}
                
            </Loader>
        </UserSearchSection>
    );
}
export default UserSearch;