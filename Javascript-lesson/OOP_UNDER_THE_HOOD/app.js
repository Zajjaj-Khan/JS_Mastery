// New Keyword
class Dog {
  constructor(name, breed) {
    this.name = name;
    this.breed = breed;
  }
  brak() {
    return "WOOF!";
  }
}
//## What it does
// There are four things that it does.
// It creates us an empty object.
// It sets the value of the keyword this within a function to be that empty object.
// It then returns that object and then it does something with prototypes.

//Prototypes:

class Cat {
  constructor(name, breed) {
    this.name = name;
    this.breed = breed;
  }
  meow() {
    return `${this.name} say meow`;
  }
  eat() {
    retrun`${this.name} is eating`;
  }
}
// This is a Constructor function
function cat(name, breed) {
  (this.name = name),
    (this.breed = breed),
    (this.meow = function () {
      return `${this.name} say meow`;
    });
  this.eat = function () {
    return `${this.name} is eating`;
  };
}

// this will make copy for the methods i.e bark();

const myObject = {
  color: "purple",
  score: 99,
  greet() {
    console.log("Hi");
  },
};

function kitty(name, breed) {
  this.name = name;
  this.breed = breed;
}
kitty.prototype.meow = function () {
  return `${this.name} say meow`;
};
// Prototype chaining

const grand_parent = {
  greet() {
    return "Hi htere ";
  },
};

const parent = {
  color: "purple",
  sing() {
    return "LA LA LA LA ";
  },
  __proto__:grand_parent
};

const child = {
  num: 2,
  __proto__: parent,
};


class GuideDog extends Dog {
    constructor(name,breed,owner){
        super(name,breed);
        this.owner = owner;
    }
    alert(){
        return `${this.name} alets you to danger`
    } 
    
}