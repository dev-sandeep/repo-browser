import React from 'react'
import styled from 'styled-components'

const StatsRow = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    width:400px;

    & > div{
        margin: auto;
        margin-top:15px;
        margin-bottom: 15px;
        text-align: center
    }
`;

const StatsNum = styled.div`
    font-size: 3em;
    font-weight: 200;
`;
const Stats = ({data}) => {
    if(Object.keys(data).length == 0)
        return null;

    return (
        <div className="stats">
            <StatsRow>
                {Object.keys(data).map((key) => (
                    <div>
                        <StatsNum>{data[key] || 0}</StatsNum>
                        <small>{key}</small>
                    </div>
                ))}
            </StatsRow>
        </div>
    );
}

export default Stats;