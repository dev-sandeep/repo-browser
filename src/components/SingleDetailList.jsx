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
    font-size: '1.5em';
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

const SingleDetailList = ({link, text, detailText, newTab}) => {
    if(!detailText || detailText.length === 0)
        return null;
        
    return (<div>
        <Title className="title">{text}</Title>
        <Detail isDetailed={true}>
            {link?(<u><a target={newTab?'noopener':''} href={link}>{detailText}</a></u>):(<>{detailText}</>)}
        </Detail>   
    </div>);
}

SingleDetailList.propTypes = {
    link: PropTypes.string,
    text: PropTypes.string.isRequired,
    detailText: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    newTab: PropTypes.bool

}

export default SingleDetailList;