//import the database information
const config = require('./knexconfig.js');
//initialize the knex package
const knex = require('knex')(config)

let input = process.argv.slice(2);
let params = input;

knex('famous_people')
  .insert({firstname: params[0], lastname: params[1] , birthdate: params[2]})
  .then(rows => console.log("---", rows))
  .then(function() { return knex.destroy()})