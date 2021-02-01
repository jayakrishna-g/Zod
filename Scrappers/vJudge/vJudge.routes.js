const router = require('express').Router();
const vJudgeService = require('./vJudge.service');

router.get('/:contestId/leaderboard', (req, res) => {
  vJudgeService
    .getLeaderboard(req.params.contestId)
    .then((result) => res.status(200).send(result))
    .catch((err) => {
      console.log(
        `Error while scrapping VJudge Leaderboard of Contest:${req.params.contestId}: \nError: ${err}`
      );
      res.status(500).send({ message: 'Internal Server Error' });
    });
});

router.get('/:contestId/submissions', (req, res) => {
  vJudgeService
    .getSubmissions(req.params.contestId)
    .then((result) => res.status(200).send(result))
    .catch((err) => {
      console.log(
        `Error while scrapping VJudge Leaderboard of Contest:${req.params.contestId}: \nError: ${err}`
      );
      res.status(500).send({ message: 'Internal Server Error' });
    });
});

router.post('/:contestId/submit/:problemId', (req, res) => {
  vJudgeService
    .submitProblem(req.params.contestId, req.params.problemId, req.body)
    .then((result) => res.status(200).send(result))
    .catch((err) => {
      console.log(
        `Error while submitting VJudge Problem of Contest:${req.params.contestId} and id:${req.params.problemId} \nError: ${err}`
      );
      res.status(500).send({ message: 'Internal Server Error' });
    });
});

router.get('/status/:runId', (req, res) => {
  vJudgeService
    .getSubmissionStatus(req.params.runId)
    .then((result) => res.status(200).send(result))
    .catch((err) => {
      console.log(
        `Error while getting VJudge Problem Submission status with RunId:${req.params.runId}\nError: ${err}`
      );
      res.status(500).send({ message: 'Internal Server Error' });
    });
});
module.exports = router;
