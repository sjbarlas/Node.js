// connection between MYSQL and Node 

var mysql = require("mysql");
 
// First you need to create a connection to the db
var con = mysql.createConnection({
  host: "localhost",
  user: "",
  password: "",
  database: "test"
});
 
con.connect(function(err){
  if(err){
    console.log('Error connecting to Db');
    return;
  }
  console.log('Connection established');
});


//var insert = "INSERT INTO employee (employeeId, Name) VALUES ?";
//var values = [[2, 'Marry'], [3, 'Peter']];
//con.query(insert, [values], function(err){
//  if(err) {

//console.log('Error inserting');
  //  return;
 //}
 // console.log('inserted successfully');
//});

var queryString = "SELECT * FROM employee";

con.query(queryString, function(err, rows)
{

//if (err)
for (var i in rows)
{
console.log(rows[i]);

}
});
con.end(function(err) {
  // The connection is terminated gracefully
  // Ensures all previously enqueued queries are still
  // before sending a COM_QUIT packet to the MySQL server.
});
