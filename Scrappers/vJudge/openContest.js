const axios = require('axios').default;

const getAttempt = (ele) => {
  const retObj = {
    time: ele[3],
    status: ele[2],
  };
  return retObj;
};

const getScoreObj = (ele, scoreObj) => {
  if (!scoreObj) {
    const tscoreObj = {};
    tscoreObj.problemId = ele[1];
    tscoreObj.attempts = [];
    tscoreObj.attempts.push(getAttempt(ele));
    return tscoreObj;
  }
  scoreObj.attempts.push(getAttempt(ele));
  return scoreObj;
};

const getAcceptedAndTimetaken = (cell) => {
  if(cell.score) {
    return {numberOfAccepted: cell.score, timetaken: cell.}
  }
  let numberOfAccepted = 0;
  let timetaken = 0;
  score.forEach((ele) => {
    const ac = ele.attempts.find((attempt) => attempt.status === 1);
    if (ac) {
      numberOfAccepted += 1;
      timetaken += ac.time;
    }
  });
  return { numberOfAccepted, timetaken };
};

const compareScores = (score1, score2) => {
  const sc1 = getAcceptedAndTimetaken(score1);
  const sc2 = getAcceptedAndTimetaken(score2);
  if (sc1.numberOfAccepted < sc2.numberOfAccepted) {
    return 1;
  }
  if (sc1.numberOfAccepted > sc2.numberOfAccepted) {
    return -1;
  }
  if (sc1.timetaken > sc2.timetaken) {
    return 1;
  }
  if (sc1.timetaken < sc2.timetaken) {
    return -1;
  }
  return 0;
};

const formLeaderBoard = (leaderBoard) => {
  const res = [];
  leaderBoard.submissions.sort((a, b) => a[0] - b[0]);
  console.log(leaderBoard.submissions);
  leaderBoard.submissions.forEach((ele, idx, arr) => {
    if (idx > 0 && ele[0] === arr[idx - 1][0]) {
      const prev = res[res.length - 1];
      const scores = prev.scores;
      const scoreObj = scores.find((score) => score.problemId === ele[1]);
      if (scoreObj) {
        getScoreObj(scoreObj);
      } else {
        prev.scores.push(getScoreObj(ele, undefined));
      }
    } else {
      const obj = {};
      const scoreObj = getScoreObj(ele, undefined);
      obj.scores = [scoreObj];
      obj.id = ele[0];
      obj.name = leaderBoard.participants[obj.id];
      res.push(obj);
    }
  });
  res.sort((a, b) => compareScores(a, b));
  console.log('After Sort:\n');
  res.forEach((ele) => {
    console.log(JSON.stringify(ele), '\n');
  });
  console.log(res);
};

axios.get('https://vjudge.net/contest/rank/single/419253').then((res) => {
  const leaderBoard = res.data;
  console.log(formLeaderBoard(leaderBoard));
});
