const mongoose = require('mongoose');

const rating = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  space: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Spaces',
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  contests: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'LeaderboardCell',
  },
  volatility: {
    type: Number,
  },
});

const Rating = mongoose.model('Rating', rating);
module.exports = Rating;
