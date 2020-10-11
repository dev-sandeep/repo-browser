import React from 'react';
import styled from 'styled-components'

const HeaderSt = styled.nav`
padding: 15px;
background: black;
color: #fff;
font-size: 1.5em;
font-weight: 300;
`;

const Header = ({title})=>{

    return (
        <HeaderSt>
             <div className="main-title">{title}</div>
        </HeaderSt>
    );
}

export default Header;