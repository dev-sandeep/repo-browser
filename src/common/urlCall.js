import Axios from 'axios';
import {
    BASE_URL
} from './config'


const getUser = (user) => {
    let url = `${BASE_URL}users/${user}`;
    return new Promise((res, rej) => {
        get(url).then((resp) => {
            let data = resp.data;
            res(data);

        }, (e) => {
            rej(e);
        });
    });
}

const getRepos = (user) => {
    let url = `${BASE_URL}users/${user}/repos`;
    return new Promise((res, rej) => {
        get(url).then((resp) => {
            let data = resp.data;
            res(data);
        }, (e) => {
            rej(e);
        });
    });
}

const getRepoDetail = (user, repoId) => {
    let url = `${BASE_URL}repos/${user}/${repoId}`;
    return new Promise((res, rej) => {
        get(url).then((resp) => {
            let data = resp.data;
            res(data);
        }, (e) => {
            rej(e);
        });
    });
}

///////////////////////////////////
function get(url) {
    if (!url) {
        console.error("URL is a mandatory field to make an API call");
        return;
    }

    return new Promise((resolve, reject) => {
        Axios.get(url).then((data) => {
            resolve(data);
        }, (e) => {
            reject(e);
        });
    });
}


export {
    getUser,
    getRepoDetail,
    getRepos
}