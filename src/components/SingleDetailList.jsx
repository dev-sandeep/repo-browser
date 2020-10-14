/**
 * responsible for loading a single row of details 
 * used in user details or repository details
 * @author Sandeep G
 * @since 20201014
 */
import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types';

const Detail = styled.div`
    font-weight: 200;
    font-size: 1.5em;
    margin-bottom: 15px;
`;

const SingleDetailList = ({link, name, fullName}) => {
    if(!fullName || fullName.length === 0)
        return null;
        
    return (<div>
        <div className="title">{name}</div>
        <Detail><a href={link}>{fullName}</a></Detail>
    </div>);
}

SingleDetailList.propTypes = {
    link: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    fullName: PropTypes.string.isRequired

}

export default SingleDetailList;