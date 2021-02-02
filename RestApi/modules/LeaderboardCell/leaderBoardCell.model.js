const mongoose = require('mongoose');
// class problemScore extends CProblems {
//   constructor(problemScore, Problem, cAcceptance, score) {
//     super(Problem, cAcceptance, score);
//     this.problemScore = problemScore;
//   }
// }
const problemScore = mongoose.Schema({
  obtainedScore: {
    type: Number,
    default: 0,
  },
  problem: {
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
});
const leaderboardCellModel = new mongoose.Schema({
  contest: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Contest',
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User',
  },
  scores: [
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
});

const ProblemScore = mongoose.model('ProblemScore', problemScore);
const LeaderboardCell = mongoose.model('LeaderboardCell', leaderboardCellModel);

exports.ProblemScore = ProblemScore,
exports.LeaderboardCell = LeaderboardCell;
