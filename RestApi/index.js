const express = require('express');
const db = require('./core/dbLib/db.connect');

const app = express.Router();
db.connect(true);

app.use('/user', require('./modules/User/user.routes'));
app.use('/contest', require('./modules/Contest/contest.routes'));
app.use('/problem', require('./modules/Problem/problem.routes'));
app.use('/space',require('./modules/Spaces/spaces.routes'));
app.use('/rating',require('./modules/Ratings/ratings.routes'))
app.use('/leaderboard',require('./modules/LeaderboardCell/leaderBoardCell.routes'));


module.exports = app;
