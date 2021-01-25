/* eslint-disable no-param-reassign */
/* eslint-disable no-underscore-dangle */

exports.getAllDatas = function (dataModel, cb) {
  console.log('Getting All Data');
  const query = {}; // get all
  dataModel.find(query, (err, allDBDatas) => {
    cb(err, allDBDatas);
  });
};

// { path: 'fans', select: 'name' }
exports.getAllDatasWithPopulate = function (dataModel, populateJson, cb) {
  console.log('Getting All Data With Populate');
  const query = {}; // get all
  dataModel
    .find(query)
    .populate(populateJson)
    .exec((err, allDBDatas) => {
      cb(err, allDBDatas);
    });
};

exports.getDataByIdAndPopulate = (dataModel, id, populateJson, cb) => {
  console.log(`Getting Single Data With ID and populate${id}`);
  dataModel
    .findById(id)
    .populate(populateJson)
    .exec((err, allDBDatas) => {
      cb(err, allDBDatas);
    });
};

// { path: 'fans', select: 'name' }
exports.getDatasWithQueryAndPopulate = (dataModel, query, populateJson, cb) => {
  console.log(`Getting Datas With Populate and Query :${query}`);
  dataModel
    .find(query)
    .populate(populateJson)
    .exec((err, allDBDatas) => {
      cb(err, allDBDatas);
    });
};

exports.getSingleDataWithQueryAndPopulate = (dataModel, query, populateJson, cb) => {
  console.log(`Getting Data With Populate and Query :${query}`);
  dataModel
    .findOne(query)
    .populate(populateJson)
    .exec((err, allDBDatas) => {
      cb(err, allDBDatas);
    });
};

exports.getDataById = (id, dataModel, cb) => {
  console.log(`Getting Data with ID ${id}`);
  dataModel.findById(id, (err, singleDBData) => {
    cb(err, singleDBData);
  });
};

exports.getDataByQuery = (query, dataModel, cb) => {
  console.log(`Getting Data with Query ${JSON.stringify(query)}`);
  dataModel.find(query, (err, allDBDatas) => {
    cb(err, allDBDatas);
  });
};

exports.getSingleDataByQuery = (query, dataModel, cb) => {
  console.log(`Getting Data with Query ${JSON.stringify(query)}`);
  dataModel.findOne(query, (err, singleData) => {
    if (err) console.log(`ERROR: ${err}`);
    cb(err, singleData);
  });
};

exports.getSingleDataByQueryAndSortedOnField = (query, fieldName, dataModel, cb) => {
  console.log(`Getting Data with Query ${JSON.stringify(query)}`);
  dataModel
    .findOne(query)
    .sort(fieldName)
    .exec((err, singleData) => {
      if (err) console.log(`ERROR: ${err}`);
      cb(err, singleData);
    });
};

exports.createdata = (dataDetails, dataModel, cb) => {
  console.log(`Create New data for ${JSON.stringify(dataDetails)}`);
  const ti = new dataModel(dataDetails);
  ti.save((err) => {
    if (err) console.log(`ERROR ${err}`);
    cb(err, ti);
  });
};

exports.updateData = function (dataDetails, dataModel, cb) {
  if (dataDetails._id) {
    dataDetails.id = dataDetails._id;
  }
  console.log(`Edit Resource ${dataDetails.id}`);
  console.log(JSON.stringify(dataModel));
  dataModel.findById(dataDetails.id, (err, qObj) => {
    if (err || !qObj) cb(err, null);
    else {
      if (dataDetails._id) delete dataDetails._id;

      console.log(JSON.stringify(dataDetails));
      Object.keys(dataDetails).forEach((p) => {
        // console.log(dataDetails[p])
        if (dataDetails[p]) qObj[p] = dataDetails[p];
      });

      // Save Updated Statement
      qObj.save((err) => {
        cb(err, qObj);
      });
    }
  });
};

exports.deleteData = function (id, softDelete, dataModel, cb) {
  console.log(`Delete Resource ${id}`);
  // cb(null, null); // Disabled Delete
  if (!softDelete) {
    dataModel.findByIdAndDelete(id, (err, qObj) => {
      if (err || !qObj) cb(err, null);
      else cb(err, qObj);
    });
  } else {
    dataModel.findById(id, (err, qObj) => {
      if (err) cb(err, null);
      else {
        qObj.isDeleted = true;
        // Save Updated Statement
        qObj.save((err) => {
          cb(err, qObj);
        });
      }
    });
  }
};

exports.deleteData2 = function (id, dataModel, cb) {
  console.log(`Delete Resource ${id}`);
  dataModel.findById(id, (err, qObj) => {
    if (err) cb(err, null);
    else {
      qObj.deleted = true;
      // Save Updated Statement
      qObj.save((err) => {
        cb(err, qObj);
      });
    }
  });
};

exports.getDatasWithPaginate = (dataModel, query, paginateOptionsJSON, cb) => {
  console.log(
    `Getting datas with query and pagination\nPaginate :${paginateOptionsJSON}\nquery : ${query}`
  );
  dataModel.paginate(query, paginateOptionsJSON, (err, res) => {
    if (err) {
      console.log(`ERROR while getting data through paginate:\n${err}`);
    }
    cb(err, res);
  });
};

exports.getDatasWithAggregate = (dataModel, aggregateArr, cb) => {
  console.log('Getting Datas With Aggregate on');
  dataModel.aggregate(aggregateArr, (err, agResults) => {
    if (err) {
      console.log(`ERROR while getting data through aggregate: \n${err}`);
    }
    cb(err, agResults);
  });
};

exports.updateDataByQuery = (dataModel, query, dataDetails, cb) => {
  console.log(`Edit Resource ${dataDetails.id}`);
  console.log(JSON.stringify(dataModel));
  dataModel.findOne(query, (err, qObj) => {
    if (err || !qObj) cb(err, null);
    else {
      if (dataDetails._id) delete dataDetails._id;

      console.log(JSON.stringify(dataDetails));
      for (const p in dataDetails) {
        // console.log(dataDetails[p])
        if (dataDetails[p]) qObj[p] = dataDetails[p];
      }

      // Save Updated Statement
      qObj.save((err) => {
        cb(err, qObj);
      });
    }
  });
};

exports.populateData = (dataModel, populateObj, populateJson, cb) => {
  dataModel.populate(populateObj, populateJson, (err, resp) => {
    if (err) {
      console.log(`Error while populating obj${err}`);
    }
    cb(err, resp);
  });
};
