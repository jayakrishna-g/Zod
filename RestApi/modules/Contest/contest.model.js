const mongoose = require('mongoose');
const leaderboardType = require('./leaderboard.enum');

// const Cproblemmodel = new mongoose.Schema({
//   problem: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'Problem',
//     required: true,
//   },
//   cAcceptance: {
//     type: Boolean,
//   },
//   score: {
//     type: Number,
//     default: 0,
//   },
// });

// const Cproblem = mongoose.model('Cproblem', Cproblemmodel);

const contestModel = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  startTime: {
    type: Date,
  },
  endTime: {
    type: Date,
  },
  url: {
    type: String,
  },
  contestSite: {
    type: String,
  },
  problems: [
    {
      problem:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Problem',
        required:true
      },
      cAcceptance: {
        type: Boolean,
      },
      score: {
        type: Number,
        default: 0,
      },
    },
  ],
  leaderboardType: {
    type: leaderboardType,
  },
});

const Contest = mongoose.model('Contest', contestModel);

exports.Contest = Contest;
