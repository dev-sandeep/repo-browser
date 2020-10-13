import React from 'react'
import {MessageWrapper} from './Loader';

const Message = (props)=>{
    return (
        <MessageWrapper visible={true}>
            <div>{props.text}</div> 
        </MessageWrapper>
    );
}

export default Message;