const express = require('express')
const app = express()

function middlewire1(req,res,next){
    console.log(req.url)
    res.send('first middlewire operated')
    next() //call second middlewire if exist

}
//if same response send to server by two middlewire then error occur or server will crash

function middlewire2(req,res,next){
    console.log(req.hostname)
    res.send('Second middlewire operated')
    
}
app.get('/x',middlewire1,middlewire2)

app.listen(5555,()=>{
    console.log('http://localhost:5555')
})
/**
 * 
 * const express = require('express')

const app = express()

function m1 (req, res, next) {
    console.log('m1 pre-next')
    next()
    console.log('m1 post-next')
}
function m2 (req, res, next) {
    console.log('m2 pre-next')
    next()
    console.log('m2 post-next')
}
function m3 (req, res, next) {
    console.log('m3 pre-next')
    next()
    console.log('m3 post-next')
}

app.get('/hello', m1, m2, m3, (req, res) => {
    console.log('pre-send')
    res.send('Hello World')
    console.log('post-send')
})


app.listen(4343, () => {
    console.log('server started on http://localhost:4343')
})
 */
