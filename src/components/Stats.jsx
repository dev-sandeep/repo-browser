/**
 * responsible for loading the numbers/stats
 * @author Sandeep G
 * @since 20201014
 */
import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types';

const StatsRow = styled.div`
    grid-template-columns: 1fr 1fr;
    width:400px;
    display: grid;
    justify-content: center;
    padding: 10px;
    margin-top: 17px;

    & > div{
        margin: 0 auto;
        margin-top:15px;
        margin-bottom: 15px;
        text-align: center
    }
`;

const StatsNum = styled.div`
    font-size: 3em;
    font-weight: 200;
`;

/**
 * @param:stats Array of objects having the key and number
 */
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

SearchForm.propTypes = {
    data: PropTypes.array.isRequired,
}


export default Stats;