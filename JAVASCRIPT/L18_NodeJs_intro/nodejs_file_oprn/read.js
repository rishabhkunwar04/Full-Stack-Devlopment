const fs=require('fs') //fs is node js file API

fs.readFile(__dirname +'/myFile.txt',function(err,data){ //__dirname give the current folder name
    if(err) throw err

    console.log(data.toString())
})