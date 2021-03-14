/* eslint-disable no-param-reassign */
/* eslint-disable new-cap */
/* eslint-disable no-unused-vars */
const axios = require('axios');
const cheerio = require('cheerio');

const isOpencontest = (url) => true;

let cookie1 = '';
let cookie2 = '';

axios.interceptors.request.use(
  (config) => {
    config.headers.cookie = cookie1 + cookie2;
    config.headers.origin = 'https://vjudge.net';
    console.info('✔ Success :', config);
    return config;
  },
  (error) => {
    console.error('❌ Wrong :¯\\_(ツ)_/¯ ', error);
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (res) => {
    if (res.config.url.includes('https://vjudge.net/solution/data/')) {
      axios.post('/api/registerSubmisson', res.data);
    }
    return res;
  },
  (error) => {
    console.error('❌ Wrong :¯\\_(ツ)_/¯ ', error);
    return Promise.reject(error);
  }
);

// returns Contest submissions
const openContest = (url) => axios.get(url);

const closedContest = (url) => Promise.reject(new Error('Not implemented'));
// checks Login Status
const checkIfLoggedIn = () => axios.post('https://vjudge.net/user/checkLogInStatus');

// Returns Axios Promise Containing cookie2 on Successful Login - Logs in User
const login = () => {
  const loginDetails = 'username=jayakrishna_g&password=WASTED%4020years';
  return axios.post('https://vjudge.net/user/login', loginDetails, {
    headers: {
      'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
    },
  });
};

// Logins in user, uses checkifloggedin & login functions.
// Sets Cookies and Returns Promise of void type.
const loginIfNotLoggedIn = async () => {
  try {
    const checkResult = await checkIfLoggedIn();
    if (checkResult.data) {
      return Promise.resolve();
    }
    cookie1 = checkResult.headers['set-cookie'][0];
    const loggedInResult = await login();
    cookie2 = loggedInResult.headers['set-cookie'][0];
    return Promise.resolve();
  } catch (e) {
    return Promise.reject(e);
  }
};

// Uses Open Contest, closed Contest, isOpencontest Methods
// ToDo: Check if closed contest is required if yes then how to scrap
module.exports.scrapLeaderboard = async (contestId) => {
  const url = `https://vjudge.net/contest/rank/single/${contestId}`;
  try {
    await loginIfNotLoggedIn();
    if (isOpencontest(url)) {
      return openContest(url);
    }
    return closedContest(url);
  } catch (err) {
    return Promise.reject(err);
  }
};

module.exports.getSolutionStatus = async (runId) => {
  try {
    await loginIfNotLoggedIn();
    return axios.post(`https://vjudge.net/solution/data/${runId}`);
  } catch (err) {
    return Promise.reject(err);
  }
};

module.exports.submitSolution = async (contestId, problemId, formData) => {
  try {
    await loginIfNotLoggedIn();
    return axios.post(`https://vjudge.net/contest/submit/${contestId}/${problemId}`, formData);
  } catch (err) {
    return Promise.reject(err);
  }
};

module.exports.getDescription = async (contestId, descriptionId) => {
  try {
    let html = await axios.get(`https://vjudge.net/contest/${contestId}`);
    let $ = cheerio.load(html.data);
    let ret = Array.from($('#contest-problems tbody tr .prob-origin a'));
    let originUrl = ret[descriptionId.charCodeAt(0) - 65].attribs.href;
    originUrl = originUrl.split('/');
    const descriptionURL = `/${originUrl[1]}/${originUrl[2]}`;
    html = await axios.get(`https://vjudge.net${descriptionURL}`);
    $ = cheerio.load(html.data);
    html = await axios.get(`https://vjudge.net${$('#frame-description')[0].attribs.src}`);
    $ = cheerio.load(html.data);
    ret = $('.data-json-container').text();
    return JSON.parse(ret).sections;
  } catch (err) {
    return Promise.reject(err);
  }
};
// this.submitSolution(
//   419253,
//   'A',
//   'language=61&share=0&source=dGVzdGVnaGp5aGdmZ2hqay5qaGdoamtqaGprJTBBZGZkZ2ZoZ2poZ2hnaGJmaGdqaGtoZ2pu&captcha=&password='
// )
//   .then((res) => {
//     console.log(res.data);
//   })
//   .catch((err) => console.error(err));
