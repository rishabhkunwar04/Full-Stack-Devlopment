// get the client
const mysql = require('mysql2');
 
// create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'myuser',
  database: 'mytestdb',
  password: 'mypass'
});

const insert ={
    name: process.argv[2],
    age: parseInt(process.argv[3]),
    city: process.argv[4] 
}

//sql query
connection.query(
    `INSERT INTO persons(name,age,city) VALUES(
        '${insert.name}',
         ${insert.age},
         '${insert.city}'

    )`,
    

    function(err,results){
        if(err)
        {
            console.log(err);
        }
        else{
            console.log('inserted successfully');
        }
       connection.close();
    }
)