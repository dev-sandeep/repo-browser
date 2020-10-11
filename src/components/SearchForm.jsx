import React from 'react'
import {debounce} from './../common/utility'

const SearchForm = ({placeholder, onChange}) => {
    const searchAction = debounce((val)=>{
        onChange(val);
    }, 350);

    const onnChangeHandler = (e)=>{
        searchAction(e.target.value);
    }

    return (
        <form id="user-serch-form" onSubmit={e=>e.preventDefault()}>
            <div className="input-div">
                <input onChange={onnChangeHandler} type="text" placeholder={placeholder} />
            </div>
        </form>
    );
}

export default SearchForm;