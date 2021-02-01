const mongoose = require('mongoose');

const problemModel = new mongoose.Schema({
  problemName: {
    type: String,
    required: true,
  },
  acceptanceRate: Number,
});

module.exports = mongoose.model('Problem', problemModel);
