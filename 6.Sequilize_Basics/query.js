const {db,Student}=require('./model');

const task= async()=>{
    try{

        await db.sync()

          const students=await Student.findAll({ //it work similar to select*
              where:{age:20}
          })
          students.forEach(s=>console.log(`
          name :${s.dataValues.name}\t\t age: ${s.dataValues.age}
          `))


    }catch(e){
        console.log(e)}

  } 
  task();