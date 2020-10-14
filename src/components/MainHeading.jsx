/**
 * responsible for loading the main header
 * @author Sandeep G
 * @since 20201014
 */
import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types';

const MainHeadingSt = styled.div`
    background: #eeeeee;    
    padding: 10px;
    padding-left: 3px;
    font-size: 3em;
    font-weight: 300;
    text-transform: capitalize;
    margin {
    bottom: 20px;
    }
`;

const MainHeading = (props)=>{
    return (
        <MainHeadingSt className="main-heading">{props.children}</MainHeadingSt>
    );
}

MainHeading.propTypes = {
    children: PropTypes.node.isRequired
}

export default MainHeading;