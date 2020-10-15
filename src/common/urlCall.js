import Axios from 'axios';
import {
    setupCache
} from 'axios-cache-adapter'
import {
    BASE_URL
} from './config'

const cache = setupCache({
    maxAge: 15 * 60 * 100
});

const api = Axios.create({
    adapter: cache.adapter
});

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
        api.get(url).then((data) => {
            resolve(data);
        }, (e) => {
            reject(e);
        });
    });
}


export {
    getUser,
    getRepoDetail,
    getRepos,
    get
}