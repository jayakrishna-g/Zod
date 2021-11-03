const scrapper = require('./vJudge.scrapper');

// Parameter: All the submissions made during contest.
// Accumulates submissions done by a particular user
const accumulateSubmissions = (submissions) => {
  const ret = {};
  submissions.forEach((ele) => {
    if (!ret[ele[0]]) {
      ret[ele[0]] = {};
    }
    if (!ret[ele[0]][ele[1]]) {
      ret[ele[0]][ele[1]] = [];
    }
    ret[ele[0]][ele[1]].push({ status: ele[2], time: ele[3] });
  });
  return ret;
};

// Parameter:Submissions made by a particular user to a particular problem.
// Returns Status of the problem i.e Timetaken, penality, status,attempts(attempts to reach AC)
const getProblemStatus = (submissions) => {
  let attempts = 0;
  let penality = 0;
  let status = 0;
  let timeTaken;
  submissions.sort((a, b) => a.time - b.time);
  for (let i = 0; i < submissions.length; i += 1) {
    if (submissions[i].status === 1) {
      penality += submissions[i].time * 1000;
      attempts += 1;
      status = 1;
      timeTaken = submissions[i].time * 1000;
      break;
    } else {
      penality += 20 * 60 * 1000;
      attempts += 1;
    }
  }
  return {
    status,
    attempts,
    penality,
    timeTaken,
  };
};

// Parameter: ParticipantObject, Submissions Made by the Participant to all problems
// Returns constructing a new Leaderboard Cell (Name,Handle, ProblemStatus)
const getLeaderboardCell = (participant, submissions) => {
  const problemStatus = {};
  if (submissions) {
    Object.keys(submissions).forEach((key) => {
      problemStatus[key] = getProblemStatus(submissions[key]);
    });
  }
  return {
    vJudgeHandle: participant[0],
    problemStatus,
  };
};

// Parameter: LeaderboardCell
// Returns TotalPenality and Total Accepted Submissions of a particular LeaderboardCell
const getCellStats = (cell) => {
  let totalPenality = 0;
  let totalAcceptedSubmissions = 0;
  Object.keys(cell.problemStatus).forEach((key) => {
    totalPenality += cell.problemStatus[key].penality;
    totalAcceptedSubmissions += cell.problemStatus[key].status;
  });
  return {
    totalPenality,
    totalAcceptedSubmissions,
  };
};

// Parameter: Leaderboard Cell's
// Compares two leaderboard cells and returns -ve if cell1 sould be sorted before cell2
const compareLeaderboardCells = (cell1, cell2) => {
  const ac1 = cell1.stats;
  const ac2 = cell2.stats;
  if (ac1.totalAcceptedSubmissions !== ac2.totalAcceptedSubmissions) {
    return ac2.totalAcceptedSubmissions - ac1.totalAcceptedSubmissions;
  }
  return ac1.totalPenality - ac2.totalPenality;
};

// Parameters: Participants and Submissions made after contest
// Constructs Leaderboard from Submissions
const constructLeaderBoard = (participants, submissions) => {
  const leaderBoard = [];

  // GET Leaderboard Cells
  Object.keys(participants).forEach((key) => {
    leaderBoard.push(getLeaderboardCell(participants[key], submissions[key]));
  });

  // Add Statistics: totalPenality,attempts until AC
  leaderBoard.forEach((cell) => {
    // eslint-disable-next-line no-param-reassign
    cell.stats = getCellStats(cell);
  });

  // Sort according to score and time
  leaderBoard.sort((a, b) => compareLeaderboardCells(a, b));

  // Add Ranks
  let rank = leaderBoard.length;
  for (let i = leaderBoard.length - 1; i >= 0; i -= 1) {
    if (i === leaderBoard.length - 1) {
      leaderBoard[i].rank = rank;
    } else if (
      leaderBoard[i].stats.totalAcceptedSubmissions ===
        leaderBoard[i + 1].stats.totalAcceptedSubmissions &&
      leaderBoard[i].stats.totalPenality === leaderBoard[i + 1].stats.totalPenality
    ) {
      leaderBoard[i].rank = rank;
    } else {
      rank -= 1;
      leaderBoard[i].rank = rank;
    }
  }
  return leaderBoard;
};

// Parameters: ScrapResult
// Returns submissions made before contest
const removeAfterContestSubmissions = (scrapResult) => {
  const beforeContestSubmissions = [];
  scrapResult.submissions.forEach((ele) => {
    if (ele[3] * 1000 < scrapResult.length) {
      beforeContestSubmissions.push(ele);
    }
  });
  return beforeContestSubmissions;
};

// Parameter: ScrapResult
// Contructs and Returns Leaderboard
const formLeaderBoard = (scrapResult) => {
  const beforeCompletionSubmissions = removeAfterContestSubmissions(scrapResult);
  console.log(beforeCompletionSubmissions);
  const sub = accumulateSubmissions(beforeCompletionSubmissions);
  console.log(sub);
  return constructLeaderBoard(scrapResult.participants, sub);
};

// Parameter: ScrapResult
// Constructs SubmissionList with handle status time question and contestId
const makeSubmissionsList = (scrapResult) => {
  const submissionsList = [];
  scrapResult.submissions.forEach((submission) => {
    submissionsList.push({
      vJudgeHandle: scrapResult.participants[submission[0]][0],
      status: submission[2],
      time: submission[3] * 1000,
      question: submission[1],
      contestId: scrapResult.id,
    });
  });
  return submissionsList;
};

module.exports.getLeaderboard = async (contestId) => {
  try {
    const scrappedLeaderboard = await scrapper.scrapLeaderboard(contestId);
    return Promise.resolve(formLeaderBoard(scrappedLeaderboard.data));
  } catch (err) {
    return Promise.reject(err);
  }
};

module.exports.getSubmissions = async (contestId) => {
  try {
    const scrappedLeaderboard = await scrapper.scrapLeaderboard(contestId);
    return Promise.resolve(makeSubmissionsList(scrappedLeaderboard.data));
  } catch (err) {
    return Promise.reject(err);
  }
};

module.exports.submitProblem = async (contestId, problemId, solutionData) => {
  try {
    console.log(solutionData.source);
    const solutionDataString = `language=54&share=0&source=${encodeURIComponent(
      solutionData.source
    )}&captcha=&password=`;
    console.log(solutionDataString);
    const result = await scrapper.submitSolution(contestId, problemId, solutionDataString);
    return Promise.resolve(result.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

module.exports.getSubmissionStatus = async (runId) => {
  try {
    const result = await scrapper.getSolutionStatus(runId);
    return Promise.resolve(result.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

module.exports.getProblemDescription = async (cId, pId) => {
  try {
    const result = await scrapper.getDescription(cId, pId);
    return Promise.resolve(result);
  } catch (err) {
    return Promise.reject(err);
  }
};
// module.exports.getContestStats = (contestId, cb) => {

// }

// this.getSubmissions(419253, (err, res) => {
//   console.log(err, res);
// });
