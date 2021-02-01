const datamodel = require('../../core/dbLib/data.service');
const Leaderboard = require('./leaderBoardCell.model');

module.exports.readLeaderboard = (id, cb) => {
  datamodel.getDataById(id, Leaderboard, cb);
};
module.exports.updateLeaderboard = (id, data, cb) => {
  datamodel.updateOneById(id, data, Leaderboard, cb);
};

module.exports.createLeaderboard = (newLeaderboard, cb) => {
  const tLeaderboard = new Leaderboard(newLeaderboard);
  tLeaderboard.password = tLeaderboard.generateHash(tLeaderboard.password);
  tLeaderboard.save((err) => {
    if (err) console.log(`ERROR CREATING Leaderboard ${err}`);
    cb(err, tLeaderboard);
  });
};

module.exports.deleteLeaderboard = (id, cb) => {
  datamodel.deleteData(id, Leaderboard, cb);
};
