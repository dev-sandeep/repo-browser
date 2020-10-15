/**
 * responsible for loading the list of repositories
 * @author Sandeep G
 * @since 20201014
 */
import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

const StripedSt = styled.tr`
    background: ${props=>props.num % 2 === 0?'#1B4C7B':'#002549'}
`;

const Cell = styled.td`
    @media (max-width:600px){
        display: ${props=>props.desktopOnly?'none':''}
    }
`;

const CellTh = styled.th`
    @media (max-width:600px){
        display: ${props=>props.desktopOnly?'none':''}
    }
`;

const Table = styled.table`
    @media(min-width:800px){
        width: 800px;
    }
    @media(max-width:800px){
        width: 90vw;
    }
    margin-top: 20px;
    padding: 10px;

    & th, & td{
        padding: 10px;
        cursor: pointer;
        text-align: left;
        border-bottom: 1px solid gray; 
    }
`;

/**
 * @props:repoData  Array of repositories of the selected user
 * @proos:selectedUser Name/ID of the selected user 
 */
const RepoList = ({repoData, selectedUser}) => {
    const history = useHistory();
    const redirectTo = (link)=>{
        history.push(link);
    }
    return (
        <Table>
            <thead>
                <tr>
                    <CellTh>Name</CellTh>
                    <CellTh desktopOnly={true}>Description</CellTh>
                    <CellTh desktopOnly={true}>Language</CellTh>
                    <CellTh>Stars</CellTh>
                </tr>
            </thead>
            <tbody>
                {repoData.length > 0 && repoData.map((el, index) => (
                    <StripedSt onClick={()=>redirectTo(`/${selectedUser}/repos/${el.name}`)} key={el.name+index} num={index}>
                        <Cell>
                            {el.name}
                        </Cell>
                        <Cell desktopOnly={true}>{el.description}</Cell>
                        <Cell desktopOnly={true} className="language">{el.language}</Cell>
                        <Cell className="stars">{el.stargazers_count}</Cell>
                    </StripedSt>
                ))}

                {repoData.length === 0?(
                    <tr>
                        <td colSpan="4">No Repository found</td>
                    </tr>
                ):(<></>)}
            </tbody>
        </Table>
    );
}

RepoList.propTypes = {
    repoData:PropTypes.array.isRequired,
    selectedUser: PropTypes.string.isRequired
}

export default RepoList;