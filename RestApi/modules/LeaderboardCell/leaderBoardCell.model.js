const {Contest, CProblems} = require('../Contest/contest.model');
const Problem = require('../Problem/problem.model')
const User = require('../User/user.model')
const mongoose = require('mongoose')

class problemScore extends CProblems{
    constructor(problemScore,Problem, cAcceptance, score){
        super(Problem,cAcceptance,score);
        this.problemScore = problemScore
    }
}

const leaderboardCellModel = new mongoose.Schema({
    contestId:{
        type:Contest,
        required: true
    },
    userId:{
        type:User.userId,
        required:true
    },
    userHandle:{
        type: String,
        default: User.userHandle
    },
    scores:{
        type: [CProblems]
    }
})