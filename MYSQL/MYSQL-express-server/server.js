const express=require('express');
const app =express();
const db=require('./db') //importing exported file

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.set("view engine","hbs");

app.get('/',(req,res)=>{
  
        db.getAllPersons()
            .then(function(persons){
                res.render('persons',{persons})
            })
            .catch(function(err){
                res.send(err)
            })

})

app.get('/add',(req,res)=>{
    res.render('person_add',{  //here person_add is page name
    
    })

});

app.post('/add',(req,res)=>{
    db.addNewPerson(req.body.name,req.body.age,req.body.city)
                   .then(()=>{
                       res.redirect('/')
                   })
                   .catch((err)=>{
                      res.send(err)
                   })
})

app.listen(5555,()=>{
    console.log('server started on http://localhost:5555')
})