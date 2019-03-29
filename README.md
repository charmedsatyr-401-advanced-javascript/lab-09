![CF](http://i.imgur.com/7v5ASc8.png) LAB
=================================================

## Lab 09: API Server

### Author: Joseph Wolfe

### Links and Resources
* [PR](https://github.com/charmedsatyr-401-advanced-javascript/lab-09/pull/1)
* [![Build Status](https://travis-ci.org/charmedsatyr-401-advanced-javascript/lab-09.svg?branch=submission)](https://travis-ci.org/charmedsatyr-401-advanced-javascript/lab-09)
* [front end](https://hidden-escarpment-25308.herokuapp.com)

#### Documentation
* [jsdoc](./docs/index.html)
* [swagger](./api/v1/doc)

### Modules
`./src/models/mongo-model.js`
`./src/models/memory-model.js`

`./src/models/categories/categories-model.js`

`./src/models/players/players-model.js`
`./src/models/players/players-schema.js`

`./src/models/teams-model.js`
`./src/models/teams-schema.js`

#### `src/models/mongo-model.js`
##### Exported Values and Methods from `mongo-model.js`
`get()` -> `Promise` -> `Array of objects` from database

`get(_id)` -> `Promise` -> `object` from database

`post(record)` -> `Promise` -> new `record` from database

`put(_id, record)` -> `Promise` -> modified `record` from database

`delete(_id)` -> `Promise` -> deleted `record` from database

#### `src/models/memory-model.js`
##### Exported Values and Methods from `memory-model.js`
`sanitize(entry)` -> returns a validated record or `undefined`

`count` -> returns the length of the database

`get()` -> `Promise` -> `Array of objects` from database

`get(id)` -> `Promise` -> `object` from database

`post(record)` -> `Promise` -> new `record` from database

`put(id, record)` -> `Promise` -> modified `record` from database

`delete(id)` -> `Promise` -> deleted `record` from database


#### `src/models/categories/`
##### Exported Values and Methods from `categories-model.js`
Exports an instance of a `Categories` model, which extends the exported class from `.src/models/memory-model.js` instantiated with a private schema.

#### `src/models/players/`
##### Exported Values and Methods from `players-model.js`
Exports an instance of a `Players` model, which extends the exported class from `.src/models/mongo-model.js` instantiated with the Mongoose schema from `players-schema.js`.

##### Exported Values and Methods from `players-schema.js`
Exports a Mongoose schema, `players`.

#### `src/models/teams/`
##### Exported Values and Methods from `teams-model.js`
Exports an instance of a `Teams` model, which extends the exported class from `.src/models/mongo-model.js` instantiated with the Mongoose schema from `teams-schema.js`.

##### Exported Values and Methods from `teams-schema.js`
Exports a Mongoose schema, `teams`

#### Running the app
See the `front end` link above for live API documentation.

#### Tests
* How do you run tests?
  * `npm run test`
  * `npm run test-watch`
  * `npm run lint`

* What assertions were made?
  * `players-models.js`
    * can post() a new player
    * can get() a player


* What assertions need to be / should be made?
  * All REST methods for the models `teams`, `players`, and `categories` should be tested.
  * End-to-end testing should be performed on the server and routes.


#### UML
`GET` requests
![GET](./docs/assets/get.jpg)

`POST` requests
![POST](./docs/assets/post.jpg)

`PUT` requests
![PUT](./docs/assets/put.jpg)

`DELETE` requests
![DELETE](./docs/assets/delete.jpg)
