import React, { useEffect, useState } from 'react'
import  { Link } from 'react-router-dom'
import styled from 'styled-components'

const StripedSt = styled.tr`
    background: ${props=>props.num % 2 == 0?'#f1f8ff':'#fff'}
`;

const RepoList = ({repoData, selectedUser}) => {
    return (
        <table id="table-repo">
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
        </table>
    );
}

export default RepoList;