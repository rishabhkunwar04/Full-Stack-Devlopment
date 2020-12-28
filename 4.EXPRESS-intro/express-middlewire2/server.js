const express = require('express');
const app=express();

app.get('/hello',(req,res)=>{
    res.send('Hello');
})

app.use('/abc',express.static(__dirname + '/Public'));


app.listen(5555,() =>{
    console.log('http://localhost:5555');
})