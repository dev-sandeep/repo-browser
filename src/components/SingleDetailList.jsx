/**
 * responsible for loading a single row of details 
 * used in user details or repository details
 * @author Sandeep G
 * @since 20201014
 */
import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types';

const Title = styled.div`
    color: #fff;
`;
const Detail = styled.div`
    font-size: ${props=>props.isDetailed?'1.5em':'2.5em !important'};
    line-height: ${props=>props.isDetailed?'1em':'40px'};
    color: #ffc22e;
    font-weight: 500;
    margin-bottom: 15px;

    font-size: 1.5em;
    line-height: 1em;

    & a{
        text-decoration: none;
        color: #ffc22e;
    }
`;

const SingleDetailList = ({link, name, fullName, fromDetail}) => {
    if(!fullName || fullName.length === 0)
        return null;
        
    return (<div>
        <Title className="title">{name}</Title>
        <Detail isDetailed={fromDetail || false}>
            {link?(<a href={link}>{fullName}</a>):(<>{fullName}</>)}
        </Detail>   
    </div>);
}

SingleDetailList.propTypes = {
    link: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    fullName: PropTypes.string.isRequired,
    fromDetail: PropTypes.bool

}

export default SingleDetailList;