//Recursion 
//factorial function using recursion
let producct = 1;


function factorial(n){
    let result = 1;
    for (let i =n; i>1;i--){
        result+= i;
    }
    return result;
};


//Recursion
//Programing Techiqu where function calls itself
function factorialRecursion(n){
    if (n <= 1) {
        return 1; // Base case
    }
    return n * factorialRecursion(n - 1); // Recursive case
}