import React from 'react'
import styled from 'styled-components'

const Detail = styled.div`
    font-weight: 200;
    font-size: 1.5em;
    margin-bottom: 15px;
`;



const SingleDetailList = ({name, fullName}) => {
    if(!fullName || fullName.length === 0)
        return null;
        
    return (<div>
        <div className="title">{name}</div>
        <Detail>{fullName}</Detail>
    </div>);
}

export default SingleDetailList;