const datamodel = require('../../core/dbLib/data.service');
const Problem = require('./problem.model');

module.exports.readProblem = (id, cb) => {
  datamodel.getDataById(id, Problem, cb);
};
module.exports.updateProblem = (id, cb) => {
  datamodel.updateData(id, Problem, cb);
};

module.exports.createProblem = (newProblem, cb) => {
  datamodel.createdata(newProblem, Problem, cb);
};

module.exports.deleteProblem = (id, cb) => {
  datamodel.deleteData(id, cb);
};
