/* eslint-disable no-param-reassign */
const datamodel = require('../../core/dbLib/data.service');
const Spaces = require('./spaces.model');
const utils = require('../../core/utils/utils');

module.exports.readSpaces = (id, cb) => {
  datamodel.getDataByIdAndPopulate(Spaces, id, [{ path: 'admin' }, { path: 'members' }], cb);
};
module.exports.updateSpaces = (id, data, cb) => {
  datamodel.updateOneById(id, data, Spaces, cb);
};

module.exports.createSpaces = (newSpaces, cb) => {
  utils.getUniqueId(Spaces, 'spaceId', (id) => {
    newSpaces.spaceId = id;
    const regex = `${newSpaces.spaceName}\s*[(\d*)]*`;
    Spaces.find(
      { spaceName: { $regex: regex, $options: 'i' } },

      (err, res) => {
        if (err) cb(err, null);
        else if (res && res.length !== 0) {
          newSpaces.spaceName += ` (${res.length})`;
          datamodel.createdata(newSpaces, Spaces, cb);
        } else {
          datamodel.createdata(newSpaces, Spaces, cb);
        }
      }
    );
  });
};

module.exports.deleteSpaces = (id, cb) => {
  datamodel.deleteData(id, Spaces, cb);
};

module.exports.getAllSpaces = (userId, cb) => {
  console.log('Check');
  datamodel.getDataWithQueryAndPopulate(Spaces, { members: userId }, [{ path: 'admin' }], cb);
};
