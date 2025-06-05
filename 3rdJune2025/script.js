const user = prompt("Enter Your Name Here:")
const uname = document.getElementById("username");
const rem = document.getElementsByClassName("remove");
const remove = document.getElementById("removeClass");
const red = document.getElementById("redColor");
const green = document.getElementById("greenColor");
const blue = document.getElementById("blueColor");
const reset = document.getElementById("resetColor");

uname.innerText = user;

red.addEventListener("click", () => uname.style.color = "red");

green.addEventListener("click", () => uname.style.color = "green");

blue.addEventListener("click", () => uname.style.color = "blue");

reset.addEventListener("click", () => uname.removeAttribute('style'));

remove.addEventListener("click", () => {
  while (rem.length > 0) {
    rem[0].remove()
  }
});
