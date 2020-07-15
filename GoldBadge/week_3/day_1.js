// WHITEBOARDING PRACTICE CHALLENGES
// COUNTING SUM CHALLENGE
// Write a function that adds together all the numbers between any two numbers.
// Your function will accept two parameters. One for the starting number and another for the ending number.
// console.log the final sum of the numbers. 

Results for testing
countingSum(1, 100) // = 5050
countingSum(35, 77) // = 2408
countingSum(234, 567) // = 133767


// function countingSum(start, stop) {
//     //console.log(start,stop);
//     let sum = start; //starts off as 1
//         // i = 2
//     for(i = start + 1; i <= stop; i++) {
//         console.log("i", i);
//         console.log("sum", sum);
//         sum = sum + 1; //sum = 1+2
//         console.log("sum + 1", sum); //3
//     }
//     console.log("total sum", sum);
// }



function countingSum(start, stop) {
    let sum = start;
    for (i = start +1; i <= stop; i++) {
        sum += i
        //console.log(sum)
    }
    console.log(sum);
}

countingSum(1,100);

//PET OBJECT
//Create a pets object
// The object should contain the following properties:
/*
Animal - string
Name - string
Gender - string
Age - integer
Likes - array
*/

let Storm = {
    animal: "cat",
    name: "Storm",
    gender: "female",
    age: 4,
    likes: [
        "cat food",
        "sunshine",
        "sitting on laps"
    ],
}

console.log(Storm.age);

// Area of a Trapezoid
// Write a function that accepts the parameters b1, b2, h 
// You function should console.log the area of a Trapezoid
// 1/2(b1 + b2)h

function trap(b1, b2, h) {
    console.log(0.5*(b1 + b2)*h)
}

trap(5, 6, 10);