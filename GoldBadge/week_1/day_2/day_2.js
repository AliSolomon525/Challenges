/*
Challenge:
Bronze:
Create a variable named FB that takes numbers
Write a conditional that: 
Prints out "Fizz" if the number is divisible by 3
Prints out "Buzz" if the number is divisible by 5
Prints out "Fizz Buzz" if the number is divisible by BOTH 3 and 5
Silver:
Write this as a Ternary
Gold: 
Write this as a Switch Statement
*/

let FB = 10

if (FB % 3 === 0 && FB % 5 === 0){ // === 0 means there is no remainder
    console.log("Fizz Buzz");
}   else if (FB % 3 === 0){
    console.log("Fizz");
}   else if (FB % 5 === 0) {
    console.log("Buzz");
}   else {
    console.log("Nada")
}

FB % 3 == 0 && FB % 5 == 0 ? console.log("Fizz Buzz") : //put this one at the top bc otherwise if it finds one of the others true, it stops running the code
FB % 3 == 0 ? console.log("Fizz") : 
FB % 5 == 0 ? console.log("Buzz") : 
console.log(`${FB} is not Fizz Buzz`);

switch (true){ //we are checking these cases against whether or not it's true
    case FB % 3 === 0 && FB % 5 === 0:
        console.log("Fizz Buzz");
        break;
    case FB % 3 === 0:
        console.log("Fizz");
        break;
    case FB % 5 === 0:
        console.log("Buzz");
        break;
    default:
        console.log("Nada");
}

/*
Challenge:
Bronze:
Create a variable named FB that takes numbers
Write a conditional that: 
Prints out "Fizz" if the number is divisible by 3
Prints out "Buzz" if the number is divisible by 5
Prints out "Fizz Buzz" if the number is divisible by BOTH 3 and 5
Silver:
Write this as a Ternary
Gold: 
Write this as a Switch Statement
*/

let FB = 15;
if (FB%3 === 0 && FB%5 === 0) {
    console.log("Fizz Buzz");
} else if (FB%3 === 0) {
    console.log("Fizz");
} else if (FB%5 === 0) {
    console.log("Buzz");
}

FB%3 === 0 && FB%5 === 0 ? console.log("Fizz Buzz") :
FB%3 === 0 ? console.log("Fizz") :
FB%5 === 0 ? console.log("Buzz") :
console.log(`${FB} is not Fizz Buzz`);

let FB = 12;
switch (true) {
    case (FB%3 === 0 && FB%5 === 0):
        console.log("Fizz Buzz");
        break;
    case (FB%3 === 0):
        console.log("Fizz");
        break;
    case (FB%5 === 0):
        console.log("Buzz");
    default:
        console.log("Nada");
}   

