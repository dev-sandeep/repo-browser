import React, { useEffect } from 'react'
import Stats from './../components/Stats';
import  { Link } from 'react-router-dom'
import styled from 'styled-components'


const NoData = ()=><h3>Search an user</h3>
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

    if(Object.keys(data).length === 0)
        return <NoData />;
    return (
        <section id="user-result">
            <div className="profile-pic">
                <img src={data.avatar_url} />
            </div>

            <div className="details">
                <div className="card-line">
                    <div className="title">Name</div>
                    <div className="detail">{data.name}</div>
                </div>
                <div className="card-line">
                    <div className="title">Company</div>
                    <div className="detail">{data.company}</div>
                </div>
                <div className="card-line">
                    <div className="title">Bio</div>
                    <div className="detail">{data.bio}</div>
                </div>

                <div className="card-line">
                    <div className="title">Repositories</div>
                    <div className="detail">
                        <Link to={`/${data.login}/repos`}>Click here</Link>
                    </div>
                </div>

                <div className="card-line">
                    <div className="title">Blog</div>
                    <div className="detail">
                        <a href={data.blog}>click here to go to blog</a>
                    </div>
                </div>

                <Stats data={stats} />
            </div>
        </section>
    );
}

export default UserResult;