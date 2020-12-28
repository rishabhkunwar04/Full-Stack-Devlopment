const express=require('express')
const app = express()

app.use(express.urlencoded({extended:true})) //for body parsing for post req
app.set('hbs_rendering engine','hbs')

let task=[
    'sample Task'
]

app.get('/',(req,res) =>{

    res.render('home',{
        title:'TodoApp',
        task
    })

})

app.post('/',(req,res)=>{
  task.push(req.body.newTask)
  res.redirect('/')
    
})

app.listen(5555,()=>{
    console.log(' server started on http://localhost:5555')
})