const http =require('http');
const express= require('express');
const app=express();//Express initializes app to be a function handler 

const socketio=require('socket.io')

const server =http.createServer(app);
const io =socketio(server);

io.on('connection',(socket)=>{
    console.log('connected to server id :',socket.id);

    socket.on('boom',()=>{ //when boom event occur this function get called
        console.log('connected received from',socket.id)
    })
    setInterval(()=>{
        socket.emit('BoomBoom');
    },2000)
    
})

app.use('/',express.static(__dirname+'/public'))  //We define a route handler '/' that gets called when we hit our website home.

server.listen(4444,()=>{
    console.log('server started on http://localhost:4444');
})