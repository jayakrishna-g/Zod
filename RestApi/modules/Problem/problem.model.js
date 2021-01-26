const mongoose = require('mongoose')

const problemModel = new mongoose.Schema({
    problemId : {
        type:String,
        required: true
    },
    problemName:{
        type: String,
        required: true
    },
    acceptanceRate: Number
})

module.exports = mongoose.model('Problem',problemModel);