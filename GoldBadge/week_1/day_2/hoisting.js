/* JS goes through 2 steps:
1. Goes through names of variable names & functions are stored in memory in their entirety
2. The code gets ran

not defined - this doesn't exist ever
undefined - it exists, but it's not substantiated (empty bucket)
*/


console.log("I'm being read first!", num); ///1
sayHi();

var num = 12;
console.log("I'm being read last", num); //5

function sayHi(){
    console.log("Hi!") //2
    var a = "hello";
    console.log(a); //3
    console.log(num); //4
}

/* ***************************** */

let myVar = 1;

function b() { //lives on the global scope and pulls the myVar 1 variable
    console.log("function b", myVar);
}

function a() {
    console.log("function a");
    let myVar = 2;
    b();
}

a();

function a() {
    console.log("function a");

    function b(){
        console.log("function b", myVar1);
    }

    let myVar1 = 2;
    b();
}

a();

//scope = "you can pass toys to a baby in a crib, but the baby can't get them themselves"