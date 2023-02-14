import validator from './validator.js';

const form = document.querySelector("form");
const creditCard = document.getElementById("creditCard");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const userNum = document.getElementById("creditCardNum").value;
  if (userNum === "") {
    alert("Debes ingresar un número para validar");
  } else {
    const validation = validator.isValid(userNum);
    console.log(validation);
    form.classList.add("noneElement");

    const creditCardTemplate = `
<section class= "creditCardStyle">
  <section class= "headerSection">
    <img src = "./img/pig2.png" alt = "logo"></img>
    <p class= "">ValiBank</p>
  </section>
  <img id= "chip" src = "./img/chip.png" alt = "chip"></img>
  <section class= "mainSection">
    <p id= "numb">${userNum}</p>
    <p class= "">Nombre Titular</p>
  </section>
</section>
`;
    creditCard.innerHTML = creditCardTemplate;

    form.reset();
  }  
});



