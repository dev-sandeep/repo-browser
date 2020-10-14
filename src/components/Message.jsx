/**
 * responsible for loading any custome message 
 * @author Sandeep G
 * @since 20201014
 */
import React from 'react'
import {MessageWrapper} from './Loader';
import PropTypes from 'prop-types';
/**
 * props:text - the custom message 
 */
const Message = (props)=>{
    return (
        <MessageWrapper visible={true}>
            <div>{props.text}</div> 
        </MessageWrapper>
    );
}

Message.propTypes = {
    text: PropTypes.string.isRequired
}

export default Message;