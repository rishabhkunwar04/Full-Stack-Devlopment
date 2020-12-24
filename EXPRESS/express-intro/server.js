const express=require('express')
const app=express()
let port=4444

app.use(express.urlencoded({extended : true}))

app.get('/greet',(req,res) =>{
    let person='Guest'
    if(req.query.person){
        person = req.query.person
    }
    res.send("Good Morning "+ person)


})
//

app.get('/:city',(req,res)=>{ //pathparameter  ,:city is treated like parameter here
    res.send('Welcome to '+ req.params.city)
})

app.post('/greet',(req,res) =>{
    let person='Guest'
    if(req.body.person){
        person=req.body.person
    }
    res.send("Good Morning "+ person)


})

app.get('/form',(req,res)=>{
    res.sendFile(__dirname+'/file/form.html')
})

app.listen(port,()=>{
    console.log(`http://localhost:${port}`)
})