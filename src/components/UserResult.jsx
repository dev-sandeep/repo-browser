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
import Moment from 'react-moment';

const Image = styled.img`
    width: 40%;
    height: 40%;
    border-radius: 125px;
    margin: 15%;
`;

const UserResultSection = styled.section`
    justify-content: center;
    display: grid;
    text-align: center;
`;

const ProfilPicDiv = styled.div`
    margin-top: 5%;
    text-align: center;
`;

const DetailDiv = styled.div`
    @media (min-width:600px){
        min-width: 600px;
    }

    @media (max-width:599px){
        min-width: 350px;
    }
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
                <SingleDetailList text={"Name"} detailText={data.name} />
                <SingleDetailList text={"Company"} detailText={data.company} />
                <SingleDetailList text={"Bio"} detailText={data.Bio} />
                <SingleDetailList text={"Location"} detailText={data.location} />
                <SingleDetailList text={"Twitter"} detailText={data.twitter_username} />
                <SingleDetailList text={"Type"} detailText={data.type} />

                <SingleDetailList text={"Repositories"} detailText={
                    <u><Link to={`/${data.login}/repos`}>{data.public_repos} Repositories</Link></u>
                } />
                <SingleDetailList text={"Last Update"} detailText={<Moment fromNow>{data.updated_at}</Moment>} />
                <SingleDetailList link={data.blog} newTab={true} text={"Blog"} detailText={
                        data.blog
                } />

                <Stats data={stats} />
            </DetailDiv>
        </UserResultSection>
    );
}

UserResult.propTypes = {
    data: PropTypes.object.isRequired,
}

export default UserResult;