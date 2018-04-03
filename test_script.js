const pg = require("pg"); //my pg package module
const settings = require("./settings"); //my settings.json

const client = new pg.Client({
  user      : settings.user,
  password  : settings.password,
  database  : settings.database,
  host      : settings.hostname,
  port      : settings.port,
  ssl       : settings.ssl
});

client.connect((err) => {
  if(err){
    return console.err("Connection Error", err);
  }
  client.query("SELECT $1::int AS number", ["1"], (err, result) =>{
    if(err){
      return console.err("error running query", err);
    }
    console.log(result.rows[0].number); //output:1
    client.end();
  });
});