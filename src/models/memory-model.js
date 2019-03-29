'use strict';

const uuid = require('uuid/v4');
/**
 * This `Model` class takes an external schema.
 * It contains REST methods and uses array manipulation techniques to return Promises
 * that resolve to data from the database.
 * @param schema {object} External schema
 */
class Model {
  constructor(schema) {
    this.schema = schema;
    this.database = [];
  }

  sanitize(entry) {
    let valid = true;
    let record = {};

    Object.keys(this.schema).forEach(field => {
      if (this.schema[field].required) {
        if (entry[field]) {
          record[field] = entry[field];
        } else {
          valid = false;
        }
      } else {
        record[field] = entry[field];
      }
    });

    return valid ? record : undefined;
  }

  count() {
    return this.database.length;
  }

  get(id) {
    const records = id ? this.database.filter(record => record._id === id) : this.database;
    return Promise.resolve(records);
  }

  post(entry) {
    entry._id = uuid();
    let record = this.sanitize(entry);
    if (record._id) {
      this.database.push(record);
    }
    return Promise.resolve(record);
  }

  delete(id) {
    this.database = this.database.filter(record => record._id !== id);
    return this.get(id);
  }

  put(id, entry) {
    let record = this.sanitize(entry);
    if (record._id) {
      this.database = this.database.map(item => (item._id === id ? record : item));
    }
    return this.get(id);
  }
}

module.exports = Model;
