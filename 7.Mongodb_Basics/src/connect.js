const {MongoClient}=require('mongodb') ; //const MongoClient=require('mongodb').MongoClient

// Connection URL
const MONGO_URL = 'mongodb://localhost:27017';
 
// Database Name
const DB_NAME = 'tododb';//if exist then assigned else get created and get assined


//async IIFE
(async ()=>{
    const client= await MongoClient.connect(MONGO_URL);
    const tododb =client.db(DB_NAME);
    console.log(tododb);
    client.close();

})()