let colorButton = document.getElementById("ChangeColor");
let colorDisplay = document.getElementById("changeCode");
let body = document.body;
let button = document.getElementById("toggleButton");
let box = document.getElementById("box");

colorButton.onclick = function() {
  let randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
  body.style.backgroundColor = randomColor;
  
  colorDisplay.innerHTML = randomColor;
};

button.onclick = function() {
  if (box.style.display === "none") {
    box.style.display = "block"
  } else {
    box.style.display = "none"
  }
};