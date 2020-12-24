const express=require('express')
const app = express()

app.use(express.urlencoded({extended:true})) //for body parsing for post req

let task=[
    'sample Task'
]

app.get('/',(req,res) =>{

    let taskList=task.map(t=>`<li>${t}</li>`).join('\n')

    res.send(
  `<html>
    <body>
        <form action="/" method="POST">
        <input name="newTask">
        <button type="submit">Submit</button>
        </form>
        <ul>
        <li>${taskList}</li>
        </ul>
    </body>
  </html>`) 

})

app.post('/',(req,res)=>{
  task.push(req.body.newTask)
  res.redirect('/')
    
})

app.listen(5555,()=>{
    console.log(' server started on http://localhost:5555')
})