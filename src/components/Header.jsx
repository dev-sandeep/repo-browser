/**
 * repsponsible for loading the Header/Navbar
 * @author Sandeep G
 * @since 20201014
 */

import React from 'react';
import styled from 'styled-components'
import  { Link } from 'react-router-dom'
import PropTypes from 'prop-types';

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

/**
 * props:title - The main website/navigation name
 */
const Header = ({title})=>{
    return (
        <HeaderSt>
             <div className="main-title">
                 <LinkSt to="/">{title}</LinkSt>
            </div>
        </HeaderSt>
    );
}

Header.propTypes = {
    title: PropTypes.string
}

export default Header;