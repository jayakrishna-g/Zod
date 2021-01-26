const mongoose = require('mongoose')
const leaderboardType = require('./leaderboard.enum')
class CProblems{
    constructor(Problem, cAcceptance, score){
        this.problemId = Problem.problemId
        this.cAcceptance = cAcceptance
        this.score = score
    }
}
const contestModel = new mongoose.Schema({
    contestId:{
        type:String,
        required: true
    },
    name:{
        type:String,
        required: true
    },
    startTime:{
        type: Date,
        required: true
    },
    endTime:{
        type: Date,
        required: true
    },
    url:{
        type:String,
        required: true
    },
    contestSite:{
        type: String,
        required: true
    },
    problems:{
        type:[CProblems],
        required: true
    },
    leaderboardType:{
        type:leaderboardType,
        required: true
    }
});

const Contest = mongoose.model('Contest',contestModel);

module.exports = [
    CProblems,
    Contest
];