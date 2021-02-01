const datamodel = require('../../core/dbLib/data.service');
const Spaces = require('./spaces.model');

module.exports.readSpaces = (id, cb) => {
  datamodel.getDataById(id, Spaces, cb);
};
module.exports.updateSpaces = (id, data, cb) => {
  datamodel.updateOneById(id, data, Spaces, cb);
};

module.exports.createSpaces = (newSpaces, cb) => {
  const tSpaces = new Spaces(newSpaces);
  tSpaces.password = tSpaces.generateHash(tSpaces.password);
  tSpaces.save((err) => {
    if (err) console.log(`ERROR CREATING Spaces ${err}`);
    cb(err, tSpaces);
  });
};

module.exports.deleteSpaces = (id, cb) => {
  datamodel.deleteData(id, Spaces, cb);
};
