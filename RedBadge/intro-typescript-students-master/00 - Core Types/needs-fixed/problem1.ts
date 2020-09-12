// PROBLEM 1
//Fix the error without altering lines 4-9

let myAddress: {
  number: number;
  streetName: string;
  city: string;
  zipcode: number;
} = {
  number: 1234,
  streetName: "Main St",
  city: "Orlando",
  zipcode: 44345,
};

//PROBLEM 2
//Two ways to solve this, let's see what you come up with

const dailyTemps = ["93", "78", "86"];

function convertToDegreesCelcius(temps: number[] | string[]) {
  return temps.map((temp) => Math.floor(((temp - 32) * 5) / 9)); //+ makes it a number
}

console.log(convertToDegreesCelcius(dailyTemps));

//PROBLEM 3

interface StateInitials {
  alabama: string;
  alaska: string;
  arizona: string;
  arkansas: string;
  california: string;
}

let StateInitials: StateInitials = {
  alabama: "AL",
  alaska: "AK",
  arizona: "AZ",
  arkansas: "AR",
  california: "CA",
};
