const Seqeulize = require('sequelize');
const DataTypes =Seqeulize.DataTypes;

const db = new Seqeulize('sampledb1', 'sampleuser1', 'samplepass1' , {
    host: 'localhost',
    dialect: 'mysql'
  });

//creating a model
  const Student=db.define('student' ,{

     name: {
        type:DataTypes.STRING(40),
        allowNull: false
      },
      age: {
        type:DataTypes.INTEGER(2),
        allowNull: false
      },

  })


//creating database
  db.sync({alter: true}) 
     .then(()=>console.log("syncronised"))
     .catch(console.error)


module.exports={
  db,Student
}