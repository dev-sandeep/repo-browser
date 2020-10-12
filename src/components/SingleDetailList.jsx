import React from 'react'

const SingleDetailList = ({name, fullName}) => {
    return (<div className="card-line">
        <div className="title">{name}</div>
        <div className="detail">{fullName}</div>
    </div>);
}

export default SingleDetailList;