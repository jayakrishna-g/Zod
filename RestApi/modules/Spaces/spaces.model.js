const mongoose = require('mongoose');

const spaces = mongoose.Schema({
  spaceName: {
    type: String,
    requried: true,
  },
  spaceDescription: {
    type: String,
    required: true,
  },
  spaceId: {
    type: String,
    required: true,
    unique: true,
  },
  members: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      requried: true,
    },
  ],
  admin: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
});

const Spaces = mongoose.model('Spaces', spaces);

module.exports = Spaces;
