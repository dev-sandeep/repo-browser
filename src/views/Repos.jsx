/**
 * responsible for loading the list of repositories
 * @author Sandeep G
 * @since 20201014
 */
import React, { useEffect, useState } from 'react'
import SearchForm from '../components/SearchForm';
import {useSelector} from 'react-redux'
import {getRepos} from './../common/urlCall';
import RepoList from './../components/RepoList'
import MainHeading from './../components/MainHeading'
import Loader from './../components/Loader'
import PropTypes from 'prop-types';

const Repos = (props) => {
    const reduxData = useSelector(state=>state);
    const [originalData, setOriginalData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isStarSorted, setIsStarSorted] = useState(false);
    const [repoData, setRepoData] = useState([]);
    const [searchText, setSearchText] = useState('');

    const selectedUser = props.match.params.user || reduxData.userId;
    /**
     * onloading first time make an API call and fetch the data
     */
    useEffect(()=>{
        setIsLoading(true);
        getRepos(selectedUser).then((data)=>{
            setRepoData(data);
            setOriginalData(data);
            setIsLoading(false);
        },(e)=>{
            console.error(e);
            setIsLoading(false);
        })
    },[selectedUser]);

    /**
     * responsible for handling the text search
     * @param {} searchText 
     */
    const onChangeHandler = (text)=>{
        setSearchText(text);
        let finalData = originalData.filter((el)=>{
            if(el.name.toLowerCase().indexOf(text.toLowerCase()) !== -1)
                return true
            if(el.description && el.description.toLowerCase().indexOf(text.toLowerCase()) !== -1)
                return true
            if(el.language && el.language.toLowerCase().indexOf(text.toLowerCase()) !== -1)
                return true

            return false;
        });

        //sort if needed
        if(isStarSorted){
            finalData = sort(finalData);
        }
        
        setRepoData(finalData);
    }

    /**
     * responsible for sorting the elements by star
     * @param {} data 
     */
    const sort = data=>[...data].sort((a, b)=>b.stargazers_count - a.stargazers_count);

    /**
     * responsbile for sorting based on number of stars
     */
    const sortByStarHandler = (e)=>{
        const isChecked = e.target.checked;
        if(isChecked){
            setIsStarSorted(true);
            //sort by stars
            let finalData = sort(repoData);
            setRepoData(finalData);
        }else{
            setIsStarSorted(false);
            setRepoData(originalData);
        }
    }

    return (
        <section id="main-repo">
            <MainHeading>Repositories</MainHeading>
            <SearchForm onChange={onChangeHandler} placeholder={"Search a repository"} />
            <div>
                <br />
                <input disabled={searchText.length > 0} type="checkbox" checked={isStarSorted} onChange={sortByStarHandler} />
                <small>Sort by stars</small>
            </div>
            <divider></divider>
            <Loader isLoading={isLoading}>
                <RepoList repoData={repoData} selectedUser={selectedUser} />
            </Loader>
        </section>
    );
}

Repos.propTypes = {
    match: PropTypes.shape({
        params: PropTypes.shape({
            user: PropTypes.string
        })
    }),
}

export default Repos;