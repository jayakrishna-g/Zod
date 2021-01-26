const datamodel = require('../../core/dbLib/data.service');
const Contest = require('./contest.model').Contest;

module.exports.readContest = (id, cb) => {
  datamodel.getDataByIdAndPopulate(Contest, id, 'problems', cb);
};
module.exports.updateContest = (id, cb) => {
  datamodel.updateData(id, Contest, cb);
};

module.exports.deleteContest = (id, cb) => {
  datamodel.deleteData(id, cb);
};

module.exports.getAllContests = (cb) => {
  datamodel.getAllDatasWithPopulate(Contest, 'problems', cb);
};

module.exports.createContest = (newContest, cb) => {
  datamodel.createdata(newContest, Contest, cb);
};
