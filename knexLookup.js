//import knex configuration

const config = require('./knexconfig.js');
const knex = require('knex')(config)

let input = process.argv.slice(2);
let param = input[0];

// knex('famous_people').select().asCallback(function(err, rows){
//   if(err){
//     console.error(err)
//     return
//   }
//   console.log(rows)
//   return
// })

knex('famous_people').select().where('firstname', param)
  .then(rows => rows.forEach(function(item){
      console.log(`- ${item.id}: ${item.firstname} ${item.lastname}, born '${item.birthdate}'`);
    }))
  .catch(err => console.log(err.message))
  .then(function() { return knex.destroy()})

