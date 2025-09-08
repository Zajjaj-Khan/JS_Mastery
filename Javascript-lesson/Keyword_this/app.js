const conan = {
    firstName: "John",
    lastName: "Doe",
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
};

const lisa = {
    firstName: "Lisa",
    lastName: "Doe",
};



//Class Js
class Cat{
    constructor(firstName){
        this.firstName = firstName;
    }

    dance(style="tango"){
        console.log("THe value of this is:", this)
        return `Meow I am ${this.firstName}` + `and I like to ${style}`
    }
}
//Global Object
//greet() ==> window.greet();
//Javascript Callls your function on some Object
function whatIsThis(){
    console.log("THe value of this is:", this)
}
const Obj = {
    color:'Purple',
    age:22,
    whatIsThis:whatIsThis,
}
//Call and Bind
//call()
//conan.fullName.call(lisa);

//Apply
const ringo ={
    firstname : "Ringo",
    greet: function (greeting){
        console.log(`${this.firstName} says ${greeting}`)
    }
}

const george = {
    firstName:'Gorge',
    lastName:'go'
}

const nums = [1,23,4,5,67]
Math.max.apply(null,nums);

function sum(){
    console.log(arguments);
}

//Bind 








//Arrow Function 
const add = (x,y) =>{
    return x+y
}
//These Arrow Functions dont make there own This
