//Highorderfuncn:-if a funcn passed as argument and if it is possible to return funcn..
//JavaScript function definitions do not specify data types for parameters.



/*function greetcreator(greeting)
{
    function greet(name)
    {
        console.log(greeting,name)
    }
    return greet
}
let g1=greetcreator("good morning")
console.log(typeof g1)


//return type function beacuse returning function name greet

console.log(g1)// this will print good morning
  */


/*function greetcreator(greeting)
{
    function greet(name)
    {
        console.log(greeting,name)
    }
    return greet()
}
let g1=greetcreator("good morning")
console.log(typeof g1)

//its return type is of type undefined
//because at last we are calling greet function&& greet function is returning nothing

console.log(g1)//it will print the function inside the function greet creator
*/

/*function greet(name)//inner greet and this global greet function are different
    {
        console.log('Hi',name)
    }

function greetcreator(greeting)
{
    function greet(name)
    {
        console.log(greeting,name)
    }
    return greet
}
let g1=greetcreator("good morning")
let g2=greetcreator("good evening")


console.log(g1('rishabh')) //it is like passing string rishabh to greet function
console.log(g2('rishabh'))
console.log(greet('arnav'))//it will call the global greet function
*/


function createGreeter(greeting) {

    function greet(name) {
        // here we treat as if name is function
        console.log(greeting, name())//if here actually name receive getname which was passed
                                   //so actually calling name() means calling getname() function
    }

    return greet
}

function getName() {
    return document.getElementById('namebox').value
}

let g1 = createGreeter('Good Morning')
let g2 = createGreeter('Good Evening')

console.log(typeof g1)


console.log(g1('Arnav'))
console.log(g1('Prateek'))

console.log(g2('Arnav'))
console.log(g2('Prateek'))
