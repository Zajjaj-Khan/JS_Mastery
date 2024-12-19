// New Keyword

class Dog{
    constructor(name, breed){
        this.name = name;
        this.breed = breed;
    }
    brak(){
        return "WOOF!"
    }
}
//## What it does
// There are four things that it does.
// It creates us an empty object.
// It sets the value of the keyword this within a function to be that empty object.
// It then returns that object and then it does something with prototypes.


//Prototypes:

class Cat{
    constructor(name, breed){
        this.name = name;
        this.breed = breed;
    }
    meow(){
        return `${this.name} say meow`
    }
    eat(){
        retrun `${this.name} is eating` 
    }
}
function Cat(name,breed){
    this.name  = name,
    this.breed = breed,
    this.meow = function(){
         return `${this.name} say meow`
    }
    this.eat = function(){
        return `${this.name} is eating` 
    }
}