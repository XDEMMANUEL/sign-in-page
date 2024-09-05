let inputs = document.querySelectorAll("#input");
// console.log(buttons);
let sign = document.getElementById("sign");

// set click listen on all buttons
// function disableSignWhenInputIsEmpty() {
//   for (let input of inputs) {
//     input.addEventListener("click", () => {
//       if (input.textContent === "") {
//         sign.toggleAttribute("disable");
//         return;
//       }
//     });
//   }
// }
if (inputs.textcontent === " ") {
  inputs.toggleAttribute("disabled");
}
