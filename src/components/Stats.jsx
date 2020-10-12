import React from 'react'

const Stats = ({data}) => {
    if(Object.keys(data).length == 0)
        return null;

    return (
        <div className="stats">
            <div className="stats-row">
                {Object.keys(data).map((key) => (
                    <div className="row">
                        <div className="stats">{data[key] || 0}</div>
                        <small>{key}</small>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Stats;