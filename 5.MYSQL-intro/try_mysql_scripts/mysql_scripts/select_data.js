// get the client
const mysql = require('mysql2');
 
// create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'myuser',
  database: 'mytestdb',
  password: 'mypass'
});


//sql query
connection.query(
    `SELECT *FROM persons`,
    

    function(err,row,field){
        if(err)
        {
            console.log(err);
        }
        else{
            console.log(row);
            console.log(field);

        }
       connection.close();
    }
)