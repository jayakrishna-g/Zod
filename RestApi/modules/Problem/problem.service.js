const datamodel = require('../../core/dbLib/data.service');
const Problem = require('./problem.model');

module.exports.readProblem = (id, cb) => {
  datamodel.getDataById(id, Problem, cb);
};
module.exports.updateProblem = (id, data, cb) => {
  datamodel.updateOneById(id, data, Problem, cb);
};

module.exports.createProblem = (newProblem, cb) => {
  datamodel.createdata(newProblem, Problem, cb);
};

module.exports.deleteProblem = (id, cb) => {
  datamodel.deleteData(id, Problem, cb);
};
