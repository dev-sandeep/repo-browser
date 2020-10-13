import React, { useEffect, useState } from 'react'
import  { Link } from 'react-router-dom'
import styled from 'styled-components'

const StripedSt = styled.tr`
    background: ${props=>props.num % 2 == 0?'#f1f8ff':'#fff'}
`;

const Table = styled.table`
    width: 800px;
    margin-top: 20px;
    padding: 10px;

    & th, & td{
        padding: 10px;
        text-align: left;
        border-bottom: 1px solid gray; 
    }
`;

const RepoList = ({repoData, selectedUser}) => {
    return (
        <Table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Language</th>
                    <th>Stars</th>
                </tr>
            </thead>
            <tbody>
                {repoData.map((el, index) => (
                    <StripedSt num={index}>
                        <td>
                            <Link to={`/${selectedUser}/repos/${el.name}`}>{el.name}</Link></td>
                        <td>{el.description}</td>
                        <td className="language">{el.language}</td>
                        <td className="stars">{el.stargazers_count}</td>
                    </StripedSt>
                ))}
            </tbody>
        </Table>
    );
}

export default RepoList;