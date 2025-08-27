//what is fp
//avoiding Looping , State Changes, Side Effects
//Imperative Prog
let sum = 0;
for (let i = 0; i < 10; i++) {
  sum += i;
}

//Functional Prog
const sumFP = [1, 2, 3, 4, 5].reduce((acc, curr) => acc + curr, 0);

const nums = [1, 2, 3, 4, 5];
//Imperative Prog
const even = [];
for (let num of nums) {
  if (nums % 2 === 0) {
    even.push(nums[i]);
  }
}

//Functional
const evenFP = nums.filter((num) => num % 2 === 0);


// PURE FUNCTIONS
//No side effeccts
//Same input always gives same output
let value = 2;

//Impure Function
function squareAndUpdateValue(num){
    value = num* num;
    return value;
}
//Pure Function
function square(num){
    return num * num;
}