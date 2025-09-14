const conan = {
    firstName: "John",
    lastName: "Doe",
    fullName: function() {
          console.log("THe value of this is:", this)
        console.log(this.firstName + " " + this.lastName);
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
conan.fullName.bind(lisa);

const lisaFullName = conan.fullName.bind(lisa);


const fullName = conan.fullName.bind(conan); 

//Binding Arg
function applySalesTax(price,taxRate){
    return price + price + taxRate
}
const applyCASalesTax = applySalesTax.bind(null,0.0725);
const applyMTSalesTax = applySalesTax.bind(null,0);

const btn =document.querySelector("button")
btn.addEventListener("click", conan.fullName.bind(conan))


class Counter {
    constructor(startingNum= 0,incrementAmt=1){
        this.count  =startingNum;
        this.incrementAmt = incrementAmt
    }
    start(){
        setInterval(this.incrementAndPrint.bind(this),1000)
    }
    incrementAndPrint(){
            console.log("Value of this", this)
            console.log(this.count);
            this.count += this.incrementAmt
        }
}

//Arrow Function 
const add = (x,y) =>{
    return x+y
}
//These Arrow Functions dont make there own This
const Object = {
    name:'John',
    greet: ()=>{
        console.log("THis is:",this)
        console.log(`This is ${Object.name}`)
    }
}
