/**
 * responsible for show the Loader
 * @author Sandeep G
 * @since 20201014
 */
import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types';

export const MessageWrapper = styled.div`
    background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
    background-size: 400% 400%;
    height: 200px;
    color: #fff;
    font-size: 3em;
    font-weight: 200;
    text-align: center;
    animation: gradient 15s ease infinite;
    margin-top:10px;
    & div{
        text-align: center;
        font-weight: 200;
        position: relative;
        top: 34%;
        margin-top: 10px;
    }

    @keyframes gradient {
    0% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0% 50%;
    }

    display: ${props=>props.visible?'block':'none'};
`;
/**
 * @props:isLoading boolean status bit to decide whether to show the loader or not
 */
const Loader = (props)=>{
    if(!props.isLoading)
        return (<>{props.children}</>);

    return (
        <MessageWrapper visible={props.isLoading}>
            <div>Loading...</div>
        </MessageWrapper>
    );
}

Loader.propTypes = {
    isLoading: PropTypes.bool,
    children: PropTypes.node.isRequired
}

export default Loader;