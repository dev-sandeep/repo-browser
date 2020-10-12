import React, { useEffect } from 'react'
import {getRepoDetail} from './../common/urlCall';
import Stats from './../components/Stats';
import SingleDetailList from './../components/SingleDetailList'

const RepoDetail = (props) => {
    const repoName = props.match.params.repo;
    const user = props.match.params.user;

    const [data, setData] = React.useState({});
    const [stats, setStats] = React.useState([]);
    useEffect(()=>{
        getRepoDetail(user, repoName).then((data)=>{
            setData(data);
            setStats({
                "Stars": data.stargazers_count,
                "Watch": data.watchers_count,
                "Forks": data.forks,
                "Open Issues": data.open_issues_count
            });
        })
    },[]);
    return (
        <section id="repo-detail">
            <div className="main-heading">{data.name}</div>
            <div className="main-repo">
                <div></div>
                <div className="details">
                    <SingleDetailList name={"Name"} fullName={data.full_name} />
                    <SingleDetailList name={"Description"} fullName={data.description} />
                    <SingleDetailList name={"Github Link"} fullName={data.html_url} />
                    <SingleDetailList name={"Created On"} fullName={data.created_at} />
                    <SingleDetailList name={"Last Update"} fullName={data.updated_at} />

                    <Stats data={stats} />
                </div>

            </div>
        </section>
    );
}

export default RepoDetail;