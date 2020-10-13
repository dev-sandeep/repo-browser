import React from 'react'
import SearchForm from '../components/SearchForm'
import UserList from '../components/UserResult'
import MainHeading from '../components/MainHeading'
import {getUser} from './../common/urlCall'
import {useDispatch} from 'react-redux'

const UserSearch = () => {
    const [userData, setUserData] = React.useState({});
    const dispatch = useDispatch();
    const onChangeHandler = (val)=>{
        //make an API call
        getUser(val).then((data)=>{
            if(Object.keys(data).length > 0){
                dispatch({type: 'set-userid', id: data.login});
                setUserData(data);
            }
        });
    }

    return (
        <section id="user-search-page">
            <MainHeading>Search</MainHeading>
            <SearchForm onChange={onChangeHandler} placeholder={"Search by github account"} />
            <UserList data={userData} />
        </section>
    );
}
export default UserSearch;