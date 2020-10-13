import React from 'react';
import styled from 'styled-components'
import  { Link } from 'react-router-dom'

const HeaderSt = styled.nav`
padding: 15px;
background: black;
color: #fff;
font-size: 1.5em;
font-weight: 300;
`;

const LinkSt = styled(Link)`
    text-decoration: none;
    color: #ffff;
`;

const Header = ({title})=>{

    return (
        <HeaderSt>
             <div className="main-title">
                 <LinkSt to="/">{title}</LinkSt>
            </div>
        </HeaderSt>
    );
}

export default Header;