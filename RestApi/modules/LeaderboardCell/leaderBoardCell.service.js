const datamodel = require('../../core/dbLib/data.service');
const LeaderboardCell = require('./leaderBoardCell.model').LeaderboardCell;

module.exports.readLeaderboard = (id, cb) => {
  const populateQuery = [{path : 'contest'}, {path : 'user'}, {path : 'scores', populate:{ path : 'problem'}}];
  datamodel.getDataByIdAndPopulate(LeaderboardCell, id, populateQuery, cb);
};
module.exports.updateLeaderboard = (id, data, cb) => {
  datamodel.updateOneById(id, data, LeaderboardCell, cb);
};

module.exports.createLeaderboard = (newLeaderboard, cb) => {
  datamodel.createdata(newLeaderboard, LeaderboardCell, cb);
};

module.exports.deleteLeaderboard = (id, cb) => {
  datamodel.deleteData(id, LeaderboardCell, cb);
};
