import React from 'react'
import styled from 'styled-components'

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

export default MainHeading;