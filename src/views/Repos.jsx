import React, { useEffect, useState } from 'react'
import SearchForm from '../components/SearchForm';
import {useSelector} from 'react-redux'
import {getRepos} from './../common/urlCall';
import styled from 'styled-components'
import  { Link } from 'react-router-dom'

const StripedSt = styled.tr`
    background: ${props=>props.num % 2 == 0?'#f1f8ff':'#fff'}
`;
const Repos = (props) => {
    const reduxData = useSelector(state=>state);
    const [originalData, setOriginalData] = useState([]);
    const [isStarSorted, setIsStarSorted] = useState(false);
    const [repoData, setRepoData] = useState([]);
    const [searchText, setSearchText] = useState('');

    const selectedUser = props.match.params.user || reduxData.userId;
    /**
     * onloading first time make an API call and fetch the data
     */
    useEffect(()=>{
        getRepos(selectedUser).then((data)=>{
            setRepoData(data);
            setOriginalData(data);
        })
    },[]);

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
            <div className="main-heading">Repositories</div>
            <SearchForm onChange={onChangeHandler} placeholder={"Search a repository"} />
            <div>
                <br />
                <input disabled={searchText.length > 0} type="checkbox" checked={isStarSorted} onChange={sortByStarHandler} />
                <small>Sort by stars</small>
            </div>
            <table id="table-repo">
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Language</th>
                    <th>Stars</th>
                </tr>
                </thead>
                <tbody>
                {repoData.map((el, index)=>(
                    <StripedSt num={index}>
                      <td>
                          <Link to={`/${selectedUser}/repos/${el.name}`}>{el.name}</Link></td>
                      <td>{el.description}</td>
                      <td className="language">{el.language}</td>
                      <td className="stars">{el.stargazers_count}</td>
                  </StripedSt>
                ))}
                </tbody>
            </table>
        </section>
    );
}

export default Repos;