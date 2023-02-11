import validator from './validator.js';

const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const userNum = document.getElementById("creditCardNum").value;
  validator.isValid(userNum);
});

