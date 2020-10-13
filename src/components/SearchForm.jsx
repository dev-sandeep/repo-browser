import React from 'react'
import {debounce} from './../common/utility'
import styled from 'styled-components'

const SearchInput = styled.input`
    display: block;
    width: 600px;
    height: 30px;
    font-size: 1.5em;
    font-weight: 200;
    margin-top: 10px;
    padding: 5px;
    padding-left: 4px;
    box-shadow: 3px 3px 6px grey;

    &:focus {
    box-shadow: 3px 3px 16px grey;
    }
`;

const SearchDiv = styled.div`
    display: flex;
`;

const SearchForm = ({placeholder, onChange, defaultText}) => {
    const searchAction = debounce((val)=>{
        onChange(val);
    }, 350);

    const onnChangeHandler = (e)=>{
        searchAction(e.target.value);
    }

    return (
        <form id="user-serch-form" onSubmit={e=>e.preventDefault()}>
            <SearchDiv>
                <SearchInput defaultValue={defaultText} onChange={onnChangeHandler} type="text" placeholder={placeholder} />
            </SearchDiv>
        </form>
    );
}

export default SearchForm;