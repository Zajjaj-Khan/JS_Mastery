// var color = "red";

// function blah(){
//     console.log(color)
// }
// blah();


for (var i = 0; i < 5; i++){
    console.log(i)
}

console.log("AFTER THE LOOP IS DONE", i)

// var origin = "Ethopia";

//let - we can reassign 
//const - we cannot reassign

let origin = "Ethopia";
let color = "black";
//Not added to window object/ Only var do add

function blah(){
    let sports= "Football";
    console.log(sports)
}
blah();
// console.log(sports);

//1.In the local Scope
//2.Any function 
//3. Global scope
let age = 20 ; 

function outer(){
    let age = 30;
    function inner(){
        let age = 40;
        console.log(age)
    }
    inner();
}


//Hoisting
console.log(food);
var food ="pizza";

// function blah(){
//     console.log(color);
//     let color="black"
// }

//Temporal Dead Zone ends
function blah(){
    let color;
    console.log(color);
    color="black"
}
//IIFE
(function(){
    let secret = 10;
    console.log("IIFE")
    console.log("SECRET IS", secret)
})();

//CLosures
function outerFunction(){
    let outerVariable= "I am outer";
    function innerFunction(){
        let innerVariable = "I am inner";
        console.log('I AM INNER FUNCTION')
        console.log(outerVariable)
    }
    return innerFunction;
}

// So a closure is created when 
// a function is defined inside another function.
// And that allows the inner function to access variables 
// from the outer function even after the outer
//function has finished executing right,

function idGenerator(){
    let count =1;
    return function generate(){
        return count++
    }
}

//Allow use to make private variables
function createCounter(){
    let count = 0;
    return {
        increment:function(){
            return count++;
        },
        decrement:function(){
            return count--;
        },
        getCount:function(){
            return count;
            
        }
    }
}

function createExponentFunction(exponent){
        return function(val){
            return val ** exponent
        }
    }
const square = createExponentFunction(2);
const cube = createExponentFunction(3);

console.log(square);
//Event Listeners
document.querySelector('button').addEventListener('click', (function(){
    let count = 0;
    return function(){
        count++;
        console.log(`You clicked ${count} times`);
    }
})());

function counterClickedFunction(id){
const btn = document.getElementById(id);
let count = 0;
btn.addEventListener('click', () => {
    
    count++;
    btn.innerText =`Button clicked ${count} times.`;
});
}

counterClickedFunction("btn1")
counterClickedFunction("btn2")



//clousure Loops

setTimeout(function(){
    console.log("Times Up!");
},200)

for (var i = 0; i < 6; i++){
    (function(j){
        setTimeout(function(){
            console.log(j);
        }, 1000*j)
    }(i))
}