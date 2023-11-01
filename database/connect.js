require('dotenv').config()
var mysql      = require('mysql');

const connection = module.exports =  mysql.createConnection({
  host     : process.env.HOST,
  user     : process.env.DATABASE_USER,
  password : process.env.DATABASE_PASSWORD,
  database : process.env.DATABASE
});
 

connection.connect((err) => {
    if (err) {
      console.error('Error connecting to MySQL database: ' + err.stack);
      return;
    }
    console.log('Connected to MySQL database as ID ');
});

// exports.connection;
