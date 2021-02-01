const express = require('express');
const db = require('./core/dbLib/db.connect');

const app = express.Router();
db.connect(true);

app.use('/user', require('./modules/User/user.routes'));
app.use('/contest', require('./modules/Contest/contest.routes'));
app.use('/problem', require('./modules/Problem/problem.routes'));

module.exports = app;
