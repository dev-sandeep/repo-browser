import React, { useEffect } from 'react'
import Stats from './../components/Stats';
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import SingleDetailList from './../components/SingleDetailList'


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
        <section id="user-result">
            <div className="profile-pic">
                <img src={data.avatar_url} />
            </div>

            <div className="details">
                <SingleDetailList name={"Name"} fullName={data.name} />
                <SingleDetailList name={"Company"} fullName={data.company} />
                <SingleDetailList name={"Bio"} fullName={data.Bio} />
                <SingleDetailList name={"Repositories"} fullName={
                    <Link to={`/${data.login}/repos`}>Click here</Link>
                } />
                <SingleDetailList name={"Blog"} fullName={
                     <a href={data.blog}>click here to go to blog</a>
                } />

                <Stats data={stats} />
            </div>
        </section>
    );
}

export default UserResult;