/**
 * responsible for loading the Search form
 * @author Sandeep G
 * @since 20201014
 */
import React from 'react'
import { debounce } from './../common/utility'
import styled from 'styled-components'
import PropTypes from 'prop-types';

const SearchInput = styled.input`
    background: transparent;
    color: inherit;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;

    display: block;
    height: 30px;
    font-size: 1.5em;
    font-weight: 200;
    margin-top: 10px;
    padding: 5px;
    padding-left: 4px;
    border: 0px;
    border-bottom: 1px solid black;
    width: 100%;
    color: #fff;
    &::placeholder{
        font-weight:200;
        color: #fff;
    }

    &::focus{
        outline: none;
        color: #fff;
        width:100%;
    }
`;

const SearchDiv = styled.div`
    display: flex;
`;

/**
 * @props:placeholder placeholder text
 * @props:onChange handler for onChange event
 * @props:defaultText defaule value of the inputbox
 */
const SearchForm = ({ placeholder, onChange, defaultText }) => {
    const searchAction = debounce((val) => {
        onChange(val);
    }, 350);

    const onnChangeHandler = (e) => {
        searchAction(e.target.value);
    }

    return (
        <form id="user-serch-form" onSubmit={e => e.preventDefault()}>
            <SearchDiv>
                <SearchInput
                    defaultValue={defaultText}
                    onChange={onnChangeHandler}
                    type="text"
                    placeholder={placeholder} />
            </SearchDiv>
        </form>
    );
}

SearchForm.propTypes = {
    placeholder: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    defaultText: PropTypes.string,
}


export default SearchForm;