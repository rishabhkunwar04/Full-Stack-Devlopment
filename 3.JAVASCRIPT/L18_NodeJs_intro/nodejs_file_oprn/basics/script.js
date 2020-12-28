const { INSPECT_MAX_BYTES } = require('buffer')
const fs=require('fs')
const os=require('os')

const In_FILE_PATH =__dirname +'/num.txt'  //this give the path of current file
const OUT_FILE_PATH =__dirname +'/sorted.txt'


fs.readFile(In_FILE_PATH,function(err,data){
    if(err) throw err

    let num=data.toString().split(os.EOL) //split the num 
    
    let sorted_num=num.sort(function(a,b){ //sort function of javascript a-b in ascending b-a in descending order
        return a-b 
    })
    
    fs.writeFile(OUT_FILE_PATH,sorted_num.join(os.EOL),function(err){
        if(err) throw err
    })
})