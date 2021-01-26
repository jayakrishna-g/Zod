const mongoose = require('mongoose');
const leaderboardType = require('./leaderboard.enum');

const Cproblemmodel = new mongoose.Schema({
  problem: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Problem',
    required: true,
  },
  cAcceptance: {
    type: Boolean,
  },
  score: {
    type: Number,
    default: 0,
  },
});

const Cproblem = mongoose.model('Cproblem', Cproblemmodel);

const contestModel = new mongoose.Schema({
  contestId: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  startTime: {
    type: Date,
    required: true,
  },
  endTime: {
    type: Date,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  contestSite: {
    type: String,
    required: true,
  },
  problems: {
    type: [mongoose.Schema.Types.ObjectId],
    required: true,
    ref: 'Cproblem',
  },
  leaderboardType: {
    type: leaderboardType,
    required: true,
  },
});

const Contest = mongoose.model('Contest', contestModel);

module.exports = [Cproblem, Contest];
