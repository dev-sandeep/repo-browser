import React from 'react'
import styled from 'styled-components'

const MainHeadingSt = styled.div`
    font-size: 2em;
    font-weight: 200;
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