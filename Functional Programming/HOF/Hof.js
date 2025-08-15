//Higher Oder Fuctions
//Higher Order Functions are functions that take other functions as arguments or return a function as their result
//or does both

function doTwice(func){
    func();
    func();
}
doTwice(function() {
    console.log("Hello, World!");
});

function multiplyBy(factor){
    return function(num) {
        return num * factor;
    };
};

//console.log(multiplyBy(3));

const triple = multiplyBy(3);
const double = multiplyBy(2);

console.log(triple(4)); // 12
console.log(double(4)); // 8