'use strict';

const rootDir = process.cwd();
const players = require(`${rootDir}/src/models/players/players-model.js`);

const supergoose = require('../supergoose.js');

beforeAll(supergoose.startDB);
afterAll(supergoose.stopDB);

describe('Players Model', () => {
  it('can post() a new player', () => {
    let obj = { name: 'John', bats: 'R', throws: 'R', position: 'C', team: 'Bunnies' };
    return players.post(obj).then(record => {
      Object.keys(obj).forEach(key => {
        expect(record[key]).toEqual(obj[key]);
      });
    });
  });

  it('can get() a player', () => {
    let obj = { name: 'John', bats: 'R', throws: 'R', position: 'C', team: 'Bunnies' };
    return players.post(obj).then(record => {
      return players.get(record._id).then(player => {
        Object.keys(obj).forEach(key => {
          expect(player[0][key]).toEqual(obj[key]);
        });
      });
    });
  });
  it('can put() a player modification', () => {
    const obj = { name: 'John', bats: 'R', throws: 'R', position: 'C', team: 'Bunnies' };
    const update = { name: 'John', bats: 'L', throws: 'L', position: 'C', team: 'Rabbits' };
    return players.post(obj).then(record => {
      return players.put(record._id, update).then(player => {
        Object.keys(obj).forEach(key => {
          expect(player[key]).toEqual(update[key]);
        });
      });
    });
  });
  it('can delete() a player ', () => {
    let obj = { name: 'John', bats: 'R', throws: 'R', position: 'C', team: 'Bunnies' };
    return players.post(obj).then(record => {
      const { _id } = record;
      return players.delete(_id).then(player => {
        expect(player).toEqual(expect.objectContaining(obj));
        return players.get(_id).then(player => {
          expect(player).not.toEqual(expect.objectContaining(obj));
        });
      });
    });
  });
});
