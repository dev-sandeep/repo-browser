import React, { useEffect } from 'react'
import { Styled } from 'styled-components'
import UserForm from '../components/SearchForm';
import {getRepoDetail} from './../common/urlCall';
import Stats from './../components/Stats';
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
                    <div className="card-line">
                        <div className="title">Name</div>
                        <div className="detail">{data.full_name}</div>
                    </div>
                    <div className="card-line">
                        <div className="title">Description</div>
                        <div className="detail">{data.description}</div>
                    </div>
                    <div className="card-line">
                        <div className="title">Github Link</div>
                        <div className="detail">{data.html_url}</div>
                    </div>
                    <div className="card-line">
                        <div className="title">Created On</div>
                        <div className="detail">{data.created_at}</div>
                    </div>
                    <div className="card-line">
                        <div className="title">Last Update</div>
                        <div className="detail">{data.updated_at}</div>
                    </div>

                    <Stats data={stats} />
                </div>

            </div>
        </section>
    );
}

export default RepoDetail;