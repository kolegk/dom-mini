"use strict";

// let total = 0;
// let totalParagraph = document.querySelector(".total");
// let cola = document.querySelector(".cola");
// let peanuts = document.querySelector(".peanuts");
// let chocolate = document.querySelector(".chocolate");
// let gummies = document.querySelector(".gummies");

// cola.addEventListener("click", () => {
//   total += 2;
//   totalParagraph.textContent = `Total:$${total}`;
// });

// peanuts.addEventListener("click", () => {
//   total += 3;
//   totalParagraph.textContent = `Total:$${total}`;
// });

// chocolate.addEventListener("click", () => {
//   total += 4;
//   totalParagraph.textContent = `Total:$${total}`;
// });

// gummies.addEventListener("click", () => {
//   total += 6;
//   totalParagraph.textContent = `Total:$${total}`;
// });

let coinForm = document.querySelector(".coin-form");

let coinContainer = document.querySelector(".coin-container");

coinForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let snapshot = new FormData(coinForm);
  let quantity = snapshot.get("amount");
  let type = snapshot.get("type");
  for (let i = 0; i < quantity; i++) {
    let newCoin = document.createElement("div");
    newCoin.textContent = type;
    newCoin.classList.add(type, "coin");
    newCoin.addEventListener("click", () => {
      newCoin.remove();
    });
    coinContainer.append(newCoin);
  }
});
let bulb = document.querySelector(".bulb");
let onButton = document.querySelector(".on");
let offButton = document.querySelector(".off");
let toggleButton = document.querySelector(".toggle");
let endButton = document.querySelector(".end");

onButton.addEventListener("click", () => {
  bulb.classList.add = "light";
});
offButton.addEventListener("click", () => {
  bulb.classList.remove = "light";
});

toggleButton.addEventListener("click", () => {
  bulb.classList.toggle = "light";
});
endButton.addEventListener("click", () => {
  bulb.classList.remove();
});
