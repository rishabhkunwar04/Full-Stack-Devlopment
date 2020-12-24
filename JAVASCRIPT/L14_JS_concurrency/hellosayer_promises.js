function helloSlayer(times,name){
    return new Promise(function(resolve,reject){
        let count=0;
            let loopid=setInterval(() =>{
                count++;
                console.log('Hello '+name)
        
                if(count==times){
                    clearInterval(loopid)
                    resolve()
                }
               
        
            },100)      
    })
}
  //sequentially
     helloSlayer(3,'Rishabh')    //
       .then(function(){
           return helloSlayer(2,'Arnav')
       })
        //OUTPUT OF THIS CODE
 /**
   Hello Rishabh
   Hello Rishabh
   Hello Rishabh
   Hello Arnav
   Hello Arnav



  */
       /**
        * //concurrently
        * 
           helloSlayer(3,'Rishabh')
             .then( helloSlayer(2,'Arnav'))

        */
             //OUTPUT OF THIS CODE
 /**
   Hello Rishabh
   Hello Arnav
   Hello Rishabh
   Hello Arnav
   Hello Rishabh




  */

module.export={
     helloSlayer
 }
 /*
 Module exports are the instruction that tells Node. js which bits of code 
 (functions, objects, strings, etc.) to “export” from a given file so other
  files are allowed to access the exported code.
 */


