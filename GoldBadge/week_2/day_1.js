// FIZZBUZZ FOR LOOP
// Create a for loop that counts from 0 to 100
// Within the for loop write a conditional that checks each number and: 
// Prints out "Fizz" if the number is divisible by 3
// Prints out "Buzz" if the number is divisible by 5
// Prints out "Fizz Buzz" if the number is divisible by BOTH 3 and 5
// Prints out the number if it is not divisible by 3 or 5
// OPTIONAL: Wrap this all in a function and invoke it
// Convert the conditional to a ternary
// Convert the conditional to a switch


for (let i = 0; i <= 100; i++){
    if (i%15 == 0) { //common denominator for 3 & 5
        console.log("Fizz Buzz");
        } else if (i%5 == 0) {
        console.log("Buzz");
        } else if (i%3 == 0) {
        console.log("Fizz");
        } else {
        console.log(i);
        }
    };

for (let i = 0; i <= 100; i++) {
    i%15 == 0 ? console.log("Fizz Buzz") :
    i%3 == 0 ? console.log("Fizz") :
    i%5 == 0 ? console.log("Buzz") :
    console.log(i);
};

for (let i = 0; i <=100; i++) {
   switch(true){
    case i%3 === 0 && i%5 === 0:
    console.log("Fizz Buzz");
    break;
    case i%5 === 0:
    console.log("Buzz");
    break;
    case i%3 === 0:
    console.log("Fizz");
    break;
   default:
    console.log(i);
    break;
    }
};

// PIES CHALLENGE
/*For Bronze, iterate over a pies array and write a conditional statement that checks in the pie includes a fruit name.
  If the pie is of the fruit variety, use string interpolation to print a sentence that includes the name of the pie.*/
// For Bronze, find all of the fruit pies and using string interpolation print a sentence including the name of the pie.
// For Silver, use a different loop and conditional to accomplish the same behaviour.
// For Gold, push all of the pies into a new array and have the new fruitPies array print once. 
// For Platinum, create an array of fruits. Use this array of fruit to compare against the pies array and push the pies that contain any of those fruits in the fruitPies array.

let pies = ['apple', 'blueberry', 'peach', 'chocolate peanut butter', 'cherry', 'sugar', 'lemon meringue', 'chicken pot', 'shepherd', 'key lime'];

for (let i = 0; i < pies.length; i++) { //pies.length gives you the # of items in an array
    console.log (i); // i is a number here
    console.log(pies[i]);
}

for (pie of pies) { //"pie" is just a placeholder for the variable, you can make it anything
    //console.log(pie);
    if (pie.includes ("apple")) {
    console.log(`${pie} is a type of fruit pie!`)
    } else {
      console.log(`${pie} is not a type of fruit pie!`);  
    }
};

for (potato in pies) {
    console.log(pie); // 0, 1, 2, 3, 4, 5, etc.
    if (pie == 0 || pie == 1 || pie == 2 || pie == 4 || pie == 6 || pie == 9){
        console.log(`${pies[pie]} is a type of fruit pie`);
    }   else { 
        console.log(`${pies[pie]} is not a type of fruit pie`)
    }
};

let applePie = {
    nameOfPie: "apple pie",
    crust: "pie dough",
    bakeTime: 20,
    servings: 1,
    rating: 5,
};

for (piece in applePie) {
    console.log(applePie[piece]);
}

