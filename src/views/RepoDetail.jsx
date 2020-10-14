/**
 * responsible for loading all the details of a repo
 * @author Sandeep G
 * @since 20201014
 */
import React, { useEffect } from 'react'
import {getRepoDetail} from './../common/urlCall';
import Stats from './../components/Stats';
import Loader from './../components/Loader'
import SingleDetailList from './../components/SingleDetailList'
import MainHeading from './../components/MainHeading'
import Moment from 'react-moment';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const RepoWrapper = styled.div`
    justify-content: center;
    display: grid;
    margin-top: 5%;
`;
const RepoDetail = (props) => {
    const repoName = props.match.params.repo;
    const user = props.match.params.user;

    const [data, setData] = React.useState({});
    const [isLoader, setIsLoader] = React.useState(false);
    const [stats, setStats] = React.useState([]);
    useEffect(()=>{
        setIsLoader(true);
        getRepoDetail(user, repoName).then((data)=>{
            setData(data);
            setStats({
                "Stars": data.stargazers_count,
                "Watch": data.watchers_count,
                "Forks": data.forks,
                "Open Issues": data.open_issues_count
            });

            setIsLoader(false);
        }, (e)=>{
            console.error(e);
            setIsLoader(false);
        })
    },[]);
    return (
        <section id="repo-detail">
            <MainHeading>
                {data.name}
            </MainHeading>
            <hr />
            <Loader isLoading={isLoader}>
                <RepoWrapper>
                    <div></div>
                    <div className="details">
                        <SingleDetailList name={"Name"} fullName={data.full_name} />
                        <SingleDetailList name={"Description"} fullName={data.description} />
                        <SingleDetailList name={"Github Link"} link={data.html_url} fullName={data.html_url} />
                        <SingleDetailList name={"Created On"} fullName={<Moment fromNow>{data.created_at}</Moment>} />
                        <SingleDetailList name={"Last Update"} fullName={<Moment fromNow>{data.updated_at}</Moment>} />

                        <Stats data={stats} />
                    </div>

                </RepoWrapper>
            </Loader>
        </section>
    );
}


RepoDetail.propTypes = {
    match: PropTypes.shape({
        params: PropTypes.shape({
            user: PropTypes.string,
            repo: PropTypes.string
        })
    }),
}
export default RepoDetail;