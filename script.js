let input = document.querySelectorAll("input");
// console.log(buttons);
let sign = document.querySelector("#sign");

// set click listen on all buttons
for (let inputs of input) {
  input.addEventListener("click", () => {
    if (input.textContent == "") {
      sign.toggleAttribute("diable");
    }
  });
}
