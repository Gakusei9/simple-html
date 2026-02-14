let num1Input = document.getElementById("num1");
let num2Input = document.getElementById("num2");
let result = document.getElementById("result");

let addButton = document.getElementById("add");
let subtractButton = document.getElementById("subtract");
let multiplyButton = document.getElementById("multiply");
let divideButton = document.getElementById("divide");


addButton.onclick = function() {
  let number1 = parseFloat(num1Input.value);
  let number2 = parseFloat(num2Input.value);
  let sum = number1 + number2;
  result.innerHTML = "Result: " + sum;
};

subtractButton.onclick = function() {
  let number1 = parseFloat(num1Input.value);
  let number2 = parseFloat(num2Input.value);
  let difference = number1 - number2;
  result.innerHTML = "Result: " + difference;
};


multiplyButton.onclick = function() {
  let number1 = parseFloat(num1Input.value);
  let number2 = parseFloat(num2Input.value);
  let sum = number1 * number2;
  result.innerHTML = "Result: " + sum;
};

divideButton.onclick = function() {
  let number1 = parseFloat(num1Input.value);
  let number2 = parseFloat(num2Input.value);
  let division = number1 / number2;
  result.innerHTML = "Result: " + division;
};