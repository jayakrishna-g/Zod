/* eslint-disable no-param-reassign */
/* eslint-disable no-underscore-dangle */

exports.getAllData = function (DataModel, cb) {
  console.log('Getting All Data');
  const query = {}; // get all
  DataModel.find(query, (err, allDBData) => {
    cb(err, allDBData);
  });
};

// { path: 'fans', select: 'name' }
exports.getAllDataWithPopulate = function (DataModel, populateJson, cb) {
  console.log('Getting All Data With Populate');
  const query = {}; // get all
  DataModel.find(query)
    .populate(populateJson)
    .exec((err, allDBData) => {
      cb(err, allDBData);
    });
};

exports.getDataByIdAndPopulate = (DataModel, id, populateJson, cb) => {
  console.log(`Getting Single Data With ID and populate${id}`);
  DataModel.findById(id)
    .populate(populateJson)
    .exec((err, allDBData) => {
      cb(err, allDBData);
    });
};

// { path: 'fans', select: 'name' }
exports.getDataWithQueryAndPopulate = (DataModel, query, populateJson, cb) => {
  console.log(`Getting Data With Populate and Query :${query}`);
  DataModel.find(query)
    .populate(populateJson)
    .exec((err, allDBData) => {
      cb(err, allDBData);
    });
};

exports.getSingleDataWithQueryAndPopulate = (DataModel, query, populateJson, cb) => {
  console.log(`Getting Data With Populate and Query :${query}`);
  DataModel.findOne(query)
    .populate(populateJson)
    .exec((err, allDBData) => {
      cb(err, allDBData);
    });
};

exports.getDataById = (id, DataModel, cb) => {
  console.log(`Getting Data with ID ${id}`);
  DataModel.findById(id, (err, singleDBData) => {
    cb(err, singleDBData);
  });
};

exports.getDataByQuery = (query, DataModel, cb) => {
  console.log(`Getting Data with Query ${JSON.stringify(query)}`);
  DataModel.find(query, (err, allDBData) => {
    cb(err, allDBData);
  });
};

exports.getSingleDataByQuery = (query, DataModel, cb) => {
  console.log(`Getting Data with Query ${JSON.stringify(query)}`);
  DataModel.findOne(query, (err, singleData) => {
    if (err) console.log(`ERROR: ${err}`);
    cb(err, singleData);
  });
};

exports.getSingleDataByQueryAndSortedOnField = (query, fieldName, DataModel, cb) => {
  console.log(`Getting Data with Query ${JSON.stringify(query)}`);
  DataModel.findOne(query)
    .sort(fieldName)
    .exec((err, singleData) => {
      if (err) console.log(`ERROR: ${err}`);
      cb(err, singleData);
    });
};

exports.createdata = (data, DataModel, cb) => {
  console.log(`Create New data for ${JSON.stringify(data)}`);
  const ti = new DataModel(data);
  ti.save((err) => {
    if (err) console.log(`ERROR ${err}`);
    cb(err, ti);
  });
};

exports.updateData = function (data, DataModel, cb) {
  if (data._id) {
    data.id = data._id;
  }
  console.log(`Edit Resource ${data.id}`);
  console.log(JSON.stringify(DataModel));
  DataModel.findById(data.id, (err, qObj) => {
    if (err || !qObj) cb(err, null);
    else {
      if (data._id) delete data._id;

      console.log(JSON.stringify(data));
      Object.keys(data).forEach((p) => {
        // console.log(data[p])
        if (data[p]) qObj[p] = data[p];
      });

      // Save Updated Statement
      qObj.save((err) => {
        cb(err, qObj);
      });
    }
  });
};

exports.deleteData = function (id, dataModel, cb) {
  console.log(`Delete Resource ${id}`);
  dataModel.deleteOne({ _id: id }, (err, res) => {
    if (err) {
      console.log(`ERROR while deleting data with id:${id} :\n${err}`);
    }
    cb(err, res);
  });
};

exports.getDataWithPaginate = (DataModel, query, paginateOptionsJSON, cb) => {
  console.log(
    `Getting data with query and pagination\nPaginate :${paginateOptionsJSON}\nquery : ${query}`
  );
  DataModel.paginate(query, paginateOptionsJSON, (err, res) => {
    if (err) {
      console.log(`ERROR while getting data through paginate:\n${err}`);
    }
    cb(err, res);
  });
};

exports.getDataWithAggregate = (DataModel, aggregateArr, cb) => {
  console.log('Getting Data With Aggregate on');
  DataModel.aggregate(aggregateArr, (err, agResults) => {
    if (err) {
      console.log(`ERROR while getting data through aggregate: \n${err}`);
    }
    cb(err, agResults);
  });
};

exports.updateDataByQuery = (DataModel, query, data, cb) => {
  console.log(`Edit Resource ${data.id}`);
  console.log(JSON.stringify(DataModel));
  DataModel.findOne(query, (err, qObj) => {
    if (err || !qObj) cb(err, null);
    else {
      if (data._id) delete data._id;

      console.log(JSON.stringify(data));
      for (const p in data) {
        // console.log(data[p])
        if (data[p]) qObj[p] = data[p];
      }

      // Save Updated Statement
      qObj.save((err) => {
        cb(err, qObj);
      });
    }
  });
};

exports.populateData = (DataModel, populateObj, populateJson, cb) => {
  DataModel.populate(populateObj, populateJson, (err, resp) => {
    if (err) {
      console.log(`Error while populating obj${err}`);
    }
    cb(err, resp);
  });
};
