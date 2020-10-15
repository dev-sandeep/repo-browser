/**
 * responsible for loading all the details of a repo
 * @author Sandeep G
 * @since 20201014
 */
import React, { useEffect } from 'react'
import {getRepoDetail, get as getCall} from './../common/urlCall';
import Stats from './../components/Stats';
import Loader from './../components/Loader'
import SingleDetailList from './../components/SingleDetailList'
import MainHeading from './../components/MainHeading'
import Moment from 'react-moment';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const RepoDetailLine = styled.div`
    @media(min-width:800px){
        width: 800px;
    }
    @media(max-width:800px){
        width: 95vw;
    }
`;
const RepoWrapper = styled.div`
    justify-content: center;
    display: grid;
    margin-top: 5%;
    padding: 0% 1%;
`;
const RepoDetail = (props) => {
    const repoName = props.match.params.repo;
    const user = props.match.params.user;

    const [data, setData] = React.useState({});
    const [isLoader, setIsLoader] = React.useState(false);
    const [stats, setStats] = React.useState([]);
    const [languages, setLanguages] = React.useState('');
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
            loadLanguage(data.languages_url);
            setIsLoader(false);
        }, (e)=>{
            console.error(e);
            setIsLoader(false);
        })
    },[user, repoName]);

    const loadLanguage = (link)=>{
        getCall(link).then((resp)=>{
            if(resp.data)
                setLanguages(Object.keys(resp.data).join(", "));
        });
    }
    return (
        <section id="repo-detail">
            <MainHeading>
                {data.name}
            </MainHeading>
            <hr />
            <Loader isLoading={isLoader}>
                <RepoWrapper>
                    <div></div>
                    <RepoDetailLine className="details">
                        <SingleDetailList text={"Name"} detailText={data.full_name} />
                        <SingleDetailList text={"Description"} detailText={data.description} />
                        <SingleDetailList text={"Language"} detailText={languages} />
                        <SingleDetailList text={"Created"} detailText={<Moment fromNow>{data.created_at}</Moment>} />
                        <SingleDetailList text={"Last Updated"} detailText={<Moment fromNow>{data.updated_at}</Moment>} />
                        <SingleDetailList text={"Github Link"} newTab={true} link={data.html_url} detailText={data.html_url} />
                        <SingleDetailList text={"Homepage"} newTab={true} link={data.homepage} detailText={data.homepage} />
                        <Stats data={stats} />
                    </RepoDetailLine>

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