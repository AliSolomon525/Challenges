/*
// CHALLENGE 1
// Who's name is longer?
/* BRONZE
Write two variables. One will store your name and another will store a friend's name. Find out what property you can use to check how long the names are. Console log how many letters are in each name.
 */
/* SILVER
Expand on what you have already done and write a conditional to see who has the longer name. Using string interpolation console log who's name is longer. 
Example Result: My name is longer than Adam's.
*/
/* GOLD
In the console log include how many letters difference there are between the names.
Example Result: Adam's name is shorter than mine by 4 letters.
There is also one additional case that should be handled that has not been mentioned so far. See if you can add that to your conditional!
*/

let name1 = "Ali"
let name2 = "Michele"

console.log(name1.length);
console.log(name2.length);

console.log(name1.length -= name2.length);

if (name2.length >= name1.length) {
   let letters = name1.length - name2.length
    console.log(letters)
    console.log(`${name2}'s name is shorter than mine by ${letters} letters.`);
} else if (name1.length <= name2.length) {
    let letters = name2.length - name1.length
    console.log(`My name is shorter than ${name2}'s letters.`);
} else {
    console.log("Our names are the same length!")
}

// CHALLENGE 2
// Types Challenge
/* BRONZE
Create an Object that contains a string, number, boolean, and object.
Console.log the type of one of the values in the object.
 */
/* SILVER
Write a conditional that checks the type of one of the values stored in the object 
and console logs the data type. If the value is not a string, number, boolean, or object console log 'What are you?!'
 */
/* GOLD 
Rewrite this as a ternary
*/

let cat = { //denote objects with {} or key:value pair, separated by columns
    name: "Storm",
    age: 3, 
    likesMe: true,
    favorites: {
        food: "treats",
        toys:"birds",
    },
}
console.log(typeof cat.favorites); //object.keys

let value = cat.likesMe;

if (typeof value === "string") { //Strictly Equal To: === and Equal To: ==
    console.log("This is a string");
} else if (typeof value === "number") {
    console.log("This is a number");
} else if (typeof value === "boolean" ) {
    console.log("This is a boolean");
} else if (typeof value === "object" ) {
    console.log("This is an object")
} else {
    console.log("What are you?");
}

// CHALLENGE 2
// Types Challenge
/* BRONZE
Create an Object that contains a string, number, boolean, and object.
Console.log the type of one of the values in the object.
 */
/* SILVER
Write a conditional that checks the type of one of the values stored in the object 
and console logs the data type. If the value is not a string, number, boolean, or object console log 'What are you?!'
 */
/* GOLD 
Rewrite this as a ternary
*/

let Storm = {
    name: "Storm",
    age: 4,
    likesBirds: true,
    favorites: {
        food: "eating food", //for an object inside an object, you still have to list they key:value pairs
        sleep: "sleeping",
        exercise: "running around",
    },
}

console.log(typeof Storm.age);

let value = Storm.favorites;

if (typeof value === "string" || typeof value === "boolean" || typeof value === "number" || typeof value === "object") {
    console.log(true);
} else {
    console.log("What are you?");  
}









