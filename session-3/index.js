// This is a comment in JavaScript
// You can see where this file is connected to your HTML in the index.html on line 14
const firstName = "Tanya";
const age = 10;

const nameAndAge = firstName + age;

let a = 5;
let b = 10;
console.log(a+b); // 15

a = 20;
console.log(a+b); //30

var c = a + b;
console.log(c); //30

a = 3;
console.log(c); //30

c = a + b + b;

console.log(c) // 23

b = 1;

console.log(a +b); // 4

const d = c + a;
console.log(d); //26

// d = 5; will cause error

function sayHey(){
    console.log("Say hey!");
}

function conversation(){
    sayHey();
    console.log("How are you?");
    console.log("Goodbye");
}
conversation();

function futureAge(name, age){
    ageInFiveYears = age + 5
    return ("Hi " + name + " You will be " + ageInFiveYears + " years old in 5 years");
}

console.log(futureAge("Julia", 25));
