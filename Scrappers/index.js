const router = require('express').Router();
const vJudgeRouter = require('./vJudge/vJudge.routes');

router.use('/vjudge', vJudgeRouter);

module.exports = router;
