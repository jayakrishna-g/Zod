const express = require('express');
const db = require('./core/dbLib/db.connect');

const app = express.Router();
db.connect(true);

app.use('/user', require('./modules/User/user.routes'));

module.exports = app;
