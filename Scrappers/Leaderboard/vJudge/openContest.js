// eslint-disable-next-line prettier/prettier
const axios = require('axios').default;

const formLeaderBoard = (leaderBoard) => {
  const res = [];
  leaderBoard.submissions.sort((a, b) => a[0] - b[0]);
  console.log(leaderBoard.submissions);
  leaderBoard.submissions.forEach((ele, idx, arr) => {
    if (idx > 0 && ele[0] === arr[idx - 1][0]) {
      const prev = res[res.length - 1];
      if (!prev[ele[1]]) {
        prev[ele[1]] = {};
        prev[ele[1]].time = [];
        prev[ele[1]].status = ele[2];
      }
      prev[ele[1]].time.push(ele[3]);
      prev[ele[1]].status = ele[2];
      res[res.length - 1] = prev;
    } else {
      const obj = {};
      if (!obj[ele[1]]) {
        obj[ele[1]] = {};
        obj[ele[1]].time = [];
        obj[ele[1]].status = ele[2];
      }
      obj[ele[1]].time.push(ele[3]);
      obj[ele[1]].status = ele[2];
      obj.id = ele[0];
      obj.name = leaderBoard.participants[obj.id];
      res.push(obj);
    }
  });
  console.log(res);
};

axios.get('https://vjudge.net/contest/rank/single/419253').then((res) => {
  const leaderBoard = res.data;
  console.log(formLeaderBoard(leaderBoard));
});
