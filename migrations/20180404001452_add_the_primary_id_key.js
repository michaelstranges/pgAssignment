
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.table('milestones', function(table){
      table.increments('id2');

    })])

};

exports.down = function(knex, Promise) {

};
