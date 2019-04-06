'use strict';
/**
 * The `Model` class takes a Mongoose schema.
 * It contains REST methods and uses Mongoose syntax to return Promises
 * that resolve to data from the database.
 * @param schema {object} Mongoose schema
 */
class Model {
  constructor(schema) {
    this.schema = schema;
  }

  get(_id) {
    let queryObject = _id ? { _id } : {};
    return this.schema.find(queryObject);
  }

  post(record) {
    let newRecord = new this.schema(record);
    return newRecord.save();
  }

  put(_id, record) {
    return this.schema.findByIdAndUpdate(_id, record, { new: true });
  }

  delete(_id) {
    return this.schema.findByIdAndDelete(_id);
  }
}

module.exports = Model;
