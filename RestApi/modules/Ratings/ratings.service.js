const datamodel = require('../../core/dbLib/data.service');
const Rating = require('./ratings.model');

module.exports.readRating = (id, cb) => {
  const populateQuery = [{path : 'user'},{path : 'space'},{path : 'contests'}]
  datamodel.getDataByIdAndPopulate(Rating, id, populateQuery, cb);
};
module.exports.updateRating = (id, data, cb) => {
  datamodel.updateOneById(id, data, Rating, cb);
};

module.exports.createRating = (newRating, cb) => {
  datamodel.createdata(newRating, Rating, cb);
};

module.exports.deleteRating = (id, cb) => {
  datamodel.deleteData(id, Rating, cb);
};
