const Seqeulize = require('sequelize');

const db = new Seqeulize('sampledb1', 'sampleuser1', 'samplepass1' , {
    host: 'localhost',
    dialect: 'mysql'
  });

  db.authenticate()
  .then(()=> console.log('successfully connected'));
 // .catch((err)=> console.error(err));