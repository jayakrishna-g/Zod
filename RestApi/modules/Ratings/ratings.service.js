const datamodel = require('../../core/dbLib/data.service');
const Rating = require('./ratings.model');

module.exports.readRating = (id, cb) => {
  datamodel.getDataById(id, Rating, cb);
};
module.exports.updateRating = (id, data, cb) => {
  datamodel.updateOneById(id, data, Rating, cb);
};

module.exports.createRating = (newRating, cb) => {
  const tRating = new Rating(newRating);
  tRating.password = tRating.generateHash(tRating.password);
  tRating.save((err) => {
    if (err) console.log(`ERROR CREATING Rating ${err}`);
    cb(err, tRating);
  });
};

module.exports.deleteRating = (id, cb) => {
  datamodel.deleteData(id, Rating, cb);
};
