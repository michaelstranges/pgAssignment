const pg = require("pg");
const settings = require("./settings");
let argv = process.argv.slice(2);
let param = argv[0];

const client = new pg.Client({
  user     : settings.user,
  password : settings.password,
  database : settings.database,
  host     : settings.hostname,
  port     : settings.port,
  ssl      : settings.ssl
});

client.connect((err) => {
  if (err){
    return console.error("Connection Error", err);
  }

    client.query('SELECT id, firstname, lastname, birthdate FROM famous_people WHERE firstname = $1;', [param], (err, result) => {
   // client.query('SELECT firstname FROM famous_people WHERE firstname = Abraham;', (err, result) => {
 // client.query('SELECT * FROM famous_people', (err, result) => { THIS WORKS
    if(err){
      return console.error("error running query", err);
    }
    var finalResult = result.rows;
    console.log(result.rows);
    console.log("Searching...")
    console.log(`Found ${result.rows.length} person(s) by the name '${param}': `)
    finalResult.forEach(function(item){
      console.log(`- ${item.id}: ${item.firstname} ${item.lastname}, born '${item.birthdate}'`);
    })
    client.end();
  })
})