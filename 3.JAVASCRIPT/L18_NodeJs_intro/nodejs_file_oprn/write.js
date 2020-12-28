const fs=require('fs') //fs is node js file API

fs.writeFile(__dirname +'/myFile.txt',"Some Data",function(err){ //__dirname give the current folder name
    if(err) throw err

    console.log("file is written Inside folder")
})