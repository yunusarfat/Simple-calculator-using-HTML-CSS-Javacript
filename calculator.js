let input = document.getElementById("inputbox");
let buttons = document.querySelectorAll("button");
let string = "";
let arr = Array.from(buttons);
arr.forEach((button) => {
  button.addEventListener("click", (y) => {
    if (y.target.innerHTML == "=") {
      string = eval(string);
      input.value = string;
    } else if (y.target.innerHTML == "AC") {
      string = "";
      input.value = string;
    } else if (y.target.innerHTML == "DEL") {
      string = string.substring(0, string.length - 1);
      input.value = string;
    } else {
      string += y.target.innerHTML;
      input.value = string;
    }
  });
});
