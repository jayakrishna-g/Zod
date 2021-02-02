const datamodel = require('../../core/dbLib/data.service');
const Spaces = require('./spaces.model');

module.exports.readSpaces = (id, cb) => {
  datamodel.getDataByIdAndPopulate(Spaces, id, [{ path : 'admin'}, {path : 'members'}] , cb);
};
module.exports.updateSpaces = (id, data, cb) => {
  datamodel.updateOneById(id, data, Spaces, cb);
};

module.exports.createSpaces = (newSpaces, cb) => {
  datamodel.createdata(newSpaces, Spaces, cb);
};

module.exports.deleteSpaces = (id, cb) => {
  datamodel.deleteData(id, Spaces, cb);
};
