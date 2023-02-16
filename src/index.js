import validator from './validator.js';

const form = document.querySelector("form");
const creditCard = document.getElementById("creditCard");
const validationMessage = document.getElementById("validation");
const goBack = document.getElementById("goBack");



form.addEventListener("submit", (e) => {
  e.preventDefault();
  const campUserNum = document.getElementById("creditCardNum");
  const userNum = campUserNum.value;
  const name = document.getElementById("name").value;
  const empty = document.getElementById("empty")
  
  if (userNum === "") {
    empty.classList.remove("noneElement");
    campUserNum.classList.add('redNumb');
  } else {
    const validation = validator.isValid(userNum);
    form.reset();   
    form.classList.add("noneElement");   
    
    const stringCard = validator.maskify(userNum);
    creditCard.innerHTML = card(stringCard, name);

    if (validation) {
      validationMessage.innerHTML = valid;
    } else {
      validationMessage.innerHTML = invalid;
    }
    goBack.innerHTML = `
    <button class= "actionButton">Volver al inicio</section>
    `;
  }  
});

goBack.addEventListener("click", (e) =>{
  e.preventDefault();
  location.reload();
})



// Funciones y variables para construir elementos necesarios
function card(numb, name){
  const creditCardTemplate = `
  <section class= "creditCardStyle">
    <section class= "headerSection">
      <img src = "./img/pig2.png" alt = "logo"></img>
      <p class= "">ValiBank</p>
    </section>
    <img id= "chip" src = "./img/chip.png" alt = "chip"></img>
    <section class= "mainSection">
      <p id= "numb">${numb}</p>
      <p id= "nameCc">${name}</p>
    </section>
  </section>
  `;
  return creditCardTemplate;
}

const valid = `
      <section class= "validationContainer">
        <img id= "" src = "./img/check.png" alt = "check"></img>
        <p id= "">La tarjeta ingresada es válida</p>
      </section>
      `;

const invalid = `
      <section class= "validationContainer">
        <img id= "" src = "./img/wrong.png" alt = "wrong"></img>
        <p id= "">La tarjeta ingresada no es válida</p>
      </section>
      `;



      
