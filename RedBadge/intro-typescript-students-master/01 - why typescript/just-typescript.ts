let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let button = document.getElementById("button1");

button.addEventListener("click", function () {
  addNumbers(num1.value, num2.value);
});

function addNumbers(num1, num2) {
  return console.log(num1 + num2);
}

//tsc --watch > you can watch a file for errors
