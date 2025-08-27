const nums =[1,23,4,5,6,7,8,9,10];
const PERSON = {
    name: "John",
    age: 30,
    city: "New York"
};

Object.freeze(PERSON); // Makes the object immutable
//Not to mtate things
function push(arr,val){
    return [...arr, val]; // Returns a new array with the value added

}

function removeLastItem(arr){
    return arr.slice(0, -1); // Returns a new array without the last item
}

const person = {name:"Teddy"}

//We make opies of Statee
