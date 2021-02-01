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
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Cproblem',
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
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Cproblem',
    },
  ],
});

const ProblemScore = mongoose.model('ProblemScore', problemScore);
const LeaderboardCell = mongoose.model('LeaderboardCell', leaderboardCellModel);

module.exports = [ProblemScore, LeaderboardCell];
