
    let numberDisplay = document.getElementById("number");
    let plusButton = document.getElementById("plusButton");
    let minusButton = document.getElementById("minusButton");
    let resetButton = document.getElementById("resetButton");
    const button = document.getElementById("changeh1");
    const title = document.getElementById("title");
    const dontButton = document.getElementById("dont");
    
    let count = 0;
    
    plusButton.onclick = function() {
      count = count + 1;
      numberDisplay.innerHTML = count;
    };
    
    minusButton.onclick = function() {
      count = count - 1;
      numberDisplay.innerHTML = count;
    };
    
    resetButton.onclick = function() {
      count = 0;
      numberDisplay.innerHTML = count;
    };

    dontButton.onclick = function() {
      alert("I told you not to click me!");
    };
    
button.onclick = function() {
  if (title.innerHTML === "Welcome to Javascript") {
    title.innerHTML = "Here you are in Javascript!";
  } else {
    title.innerHTML = "Welcome to Javascript";
  }
};