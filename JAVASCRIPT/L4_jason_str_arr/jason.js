//OOPs in javascript
//allow to create object without any class


// way of creating JASON(javascript object notation)

//1.
var apple={
    taste:"sweet",
    color:"red",
}

//2.
function fruit(taste,color){
    this.color=color;
    this.taste=taste;
}
//using new keyword
let orange=new fruit("sweet","yellow");

//3.
//class keyword (Ecmascript 2015) meathod 
class fruitclass{

    constructor(taste,color)
    {
        this.color=color;
        this.taste=taste;

    }
};
let kiwi=new fruitclass("sour","green");

/*var car={
    price:100000000000,
    speed:200,
    model:["bmw","ferrari","masserati","woxwagon"]

    move:function(){
        console.log("car is moving with speed of",this.speed);
    }

};

//for loop
for(let i=0;i<car.model.length;i++)
{
    console.log(car.model[i]);
    console.log("Rs:",car.price);
}

//for each loop
car.model.forEach(function(idx,val){
   console.log(val,idx);
});*/