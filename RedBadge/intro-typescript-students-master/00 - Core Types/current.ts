let fullName: string;
fullName = "Ali";

let age: number;
age = 29;

let thing: any; //can make the variable anything
thing = "cat";

let likesCats: boolean;
likesCats = true;

let numberList: number[];
//numberList = ["Ali"] string won't work
numberList = [1, 2, 33];

let stringList: string[];
stringList = ["Ali", "Solomon"];

let unionStringAndNumber: number | string[]; //string and number is called a union

function subtractNumbers(num1: number, num2: number) {
  return num1 - num2;
}

subtractNumbers(4, 3);

let myState: string | number = "Indiana";

let person: {
  name: string;
  age: number;
  email: string;
  homeTown?: string; //? makes it optional
};

person = {
  name: "Ali",
  age: 29,
  email: "ali.solomon@gmail.com",
};

//interface allows you to refactor your code and not have to duplicate it
//you can use PersonData as a sub for all of those types in there instead of retyping all of the types again

interface PersonData {
  name: string;
  age: number;
  email: string;
  homeTown?: string; //? makes it optional
}

let person2: PersonData;
person2 = {
  name: "Andrew",
  age: 30,
  email: "amsolo@gmail.com",
  homeTown: "West Lafayette",
};
