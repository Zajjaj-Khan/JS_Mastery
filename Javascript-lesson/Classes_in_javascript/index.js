//Static Methods

class MyMath {
  static add(a, b) {
    return a;
  }
  static mulltiply(a, b) {
    return a * b;
  }
}

class Cat {
  constructor(name, breed) {
    this.name = name;
    this.breed = breed;
  }
  //Factory Methods
  static registoryStray() {
    const names = [
      "cat",
      " James",
      "Biscuut",
      " cat ",
      " Jiffar",
      "Gorzilla",
      "Fun",
      "fat",
    ];

    const name = choice(names);
    return new Cat(name, "unknown");
  }
  meow() {
    return `${this.name} says meow`;
  }
}
function choice(arr) {
  const randIndx = Math.floor(Math.random() * arr.length);
  return arr[randIndx];
}

//Getter and Setter

class Circle {
  constructor(radius) {
    this._radius = radius;
  }
  get diameter() {
    //acts like a function but looks like a property
    return this._radius * 2;
  }
}

class CircleSetter {
  constructor(radius) {
    this._radius = radius;
  }
  set radius(value) {
    //acts like a function but called like a property
    if (value < 0) {
      throw new Error("Radius cannot be negative");
    } else {
      this._radius = value;
    }
  }
}

class User {
  constructor(fname, lname) {
    this.firstName = fname;
    this.lastName = lname;
  }

  get FullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  set splitName(fullName) {
    const [fname, lname] = fullName.split(" ");
    this.firstName = fname;
    this.lastName = lname;
  }
}
//Public Feilds
class MyClass {
  static numOfCats = 0;
  //public Class feilds
  name;
  numLegs = 4;
  constructor(name) {
    this.name = name;
    MyClass.numOfCats += 1;
  }

  amputate() {
    MyClass.numOfCats -= 1;
  }
}

class Circles {
  #raduis;
  constructor(raduis) {
    this.#raduis = raduis;
  }
}

const MyCircle = new Circles(10);
// MyCircle.#raduis = -10; --Private instance

class MyClasses {
  #privateMethod() {
    console.log("Private Method Claled!");
  }
  publicMethod() {
    this.#privateMethod();
  }
}
console.log(MyClasses.publicMethod);

// Static Initailzation blocks
class MyClass2 {
  static connection;

  static {
    this.connection = {};
  }
}
//Excercise
class UserProfile {
  constructor() {
    this._username = "john_smith";
    this._email = "john@example.com";
    this._birthdate = "1990-01-01";
  }

  get username() {
    return this._username;
  }
  set username(value) {
    if (typeof value !== "string" || value.trim() === "") {
      throw new Error("Invalid username.");
    }
    this._username = value;
  }

  // Getter and setter for email
  get email() {
    return this._email;
  }

  set email(value) {
    if (!value.includes("@")) {
      throw new Error("Invalid email.");
    }
    this._email = value;
  }

  // Getter and setter for birthdate
  get birthdate() {
    return this._birthdate;
  }

  set birthdate(value) {
    const birthdateRegex = /^\d{4}-\d{2}-\d{2}$/; // Regex for YYYY-MM-DD format
    if (!birthdateRegex.test(value)) {
      throw new Error("Invalid birthdate.");
    }
    this._birthdate = value;
  }
}

function whatIsThis() {
  console.log("The value of this is:", this);
}
const Person = {
  name: "Zajjaj",
  city: "Karachi",
  sing: function () {
    console.log("This is:", this);
    return `${this.name} sings LALALA `;
  },
};
