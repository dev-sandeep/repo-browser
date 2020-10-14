/**
 * A composite component responsible for loading the details section of the user
 * @author Sandeep G
 * @since 20201014
 */
import React, { useEffect } from 'react'
import Stats from './../components/Stats';
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import SingleDetailList from './../components/SingleDetailList'
import PropTypes from 'prop-types';

const Image = styled.img`
    width: 250px;
    height: 250px;
    border-radius: 125px;
    margin: 15%;
`;

const UserResultSection = styled.section`
    justify-content: center;
    display: grid;
`;

const ProfilPicDiv = styled.div`
    margin-top: 5%;
    text-align: center;
`;

const DetailDiv = styled.div`
    max-width: 600px;
`;

const NoData = () => <h3>Search an user</h3>
const UserResult = ({ data }) => {
    const [stats, setStats] = React.useState({});
    useEffect(() => {
        setStats({
            "followers": data.followers,
            "following": data.following,
            "public gist": data.public_gist,
            "public repos": data.public_repos
        });
    }, [data]);

    if (Object.keys(data).length === 0)
        return <NoData />;
    return (
        <UserResultSection>
            <ProfilPicDiv>
                <Image src={data.avatar_url} />
            </ProfilPicDiv>

            <DetailDiv>
                <SingleDetailList name={"Name"} fullName={data.name} />
                <SingleDetailList name={"Company"} fullName={data.company} />
                <SingleDetailList name={"Bio"} fullName={data.Bio} />
                <SingleDetailList name={"Repositories"} fullName={
                    <Link to={`/${data.login}/repos`}>Click here</Link>
                } />
                <SingleDetailList name={"Blog"} fullName={
                    <a href={data.blog}>Click here to go to blog</a>
                } />

                <Stats data={stats} />
            </DetailDiv>
        </UserResultSection>
    );
}

UserResult.propTypes = {
    data: PropTypes.array.isRequired,
}

export default UserResult;