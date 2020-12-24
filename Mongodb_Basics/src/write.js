const {MongoClient}=require('mongodb') ; //const MongoClient=require('mongodb').MongoClient

// Connection URL
const MONGO_URL = 'mongodb://localhost:27017';
 
// Database Name
const DB_NAME = 'tododb';//if exist then assigned else get created and get assined
 
async function writetask()
{
    const client= await MongoClient.connect(MONGO_URL);
    const tododb =client.db(DB_NAME);
    const todos =tododb.collection('todos');

    const todo ={
        task:'an important task',
        owner:'Rishabh',
        priority:1

    }
    const result=await todos.insertOne(todo);
    console.log(result);
    

}
writetask();