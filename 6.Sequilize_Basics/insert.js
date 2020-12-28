//importing from model file.js
const {db,Student}= require('./model');

//inserting entities
const task= async()=>{
    try{

        await db.sync() //it create the database using model

          //inserting a student
         for(let i=0;i<30;i++)
         {
          await Student.create({
            name:(['Raj','Rahul','Rohan','ronit','ritwik','radhe','Ram','Ramesh','ripu',
                      'Arnav'])[parseInt(Math.random()*10)],
            age:10+parseInt(Math.random()*10)
          })
         }

    }catch(e){
        console.log(e)}

  } 
  task();