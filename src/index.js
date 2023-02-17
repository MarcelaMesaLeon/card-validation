import validator from './validator.js';

const principalContainer = document.getElementById("principal");

// Se genera de manera dinámica el formulario
const form = createForm(principalContainer);

// Comportamiento al enviar el formulario
form.form.addEventListener("submit", (e) => {
  e.preventDefault();
  const campUserNum = form.inputNumberCreditCard;
  const userNum = campUserNum.value;
  const buttonForm = form.buttonForm;
  const campUserName = form.inputName;
  const userName = campUserName.value; 
  
  if (userNum === "") {
    const textEmpty = document.createElement("p");
    form.form.insertBefore(textEmpty, buttonForm);   
    textEmpty.innerHTML = "*Este campo no debe quedar vacío, ingrese el número de tarjeta de crédito";
    textEmpty.classList.add("textEmpty"); 
    campUserNum.classList.add('redNumb');
  } else {
    const validation = validator.isValid(userNum);
    form.form.reset();   
    form.form.classList.add("noneElement");   

    // Se oculta el formulario y se da paso a la creación de la credit card
    const stringCard = validator.maskify(userNum);
    const logoCreditCard = validator.franchise(userNum);
    const card = createCard(stringCard, userName, logoCreditCard);
    principalContainer.appendChild(card); 
    
    // Se crea elemento para mostrar la respuesta de la validación
    const validationMessage = document.createElement("section");
    principalContainer.appendChild(validationMessage);
    if (validation) {
      validationMessage.innerHTML = valid;
    } else {
      validationMessage.innerHTML = invalid;
    }

    // Se crea elemento para botón de regresar al inicio 
    const goBackContainer = document.createElement("section");
    goBackContainer.setAttribute("id", "goBack");
    principalContainer.appendChild(goBackContainer);
    const goBackButton = document.createElement("button");
    goBackButton.classList.add("actionButton");
    goBackButton.innerHTML = "Volver al inicio";
    goBackContainer.appendChild(goBackButton);

    // Comportamiento al dar click en botón 'volver al inicio' 
    goBackButton.addEventListener("click", (e) =>{
      e.preventDefault();
      location.reload();
    })
  }  
});




// Funciones y variables para construir elementos necesarios

function createForm(principal){        
  const form = document.createElement("form");
  form.classList.add("formContainer");
  principal.appendChild(form);
  const textName = document.createElement("p");
  textName.innerHTML = "Ingresa el nombre del titular tal como se encuentra en la tarjeta";
  form.appendChild(textName);
  const inputName = document.createElement("input");
  inputName.setAttribute("placeholder", "Ingresa el nombre");
  inputName.setAttribute("id", "name");
  form.appendChild(inputName);
  const textCreditCard = document.createElement("p");
  textCreditCard.innerHTML = "Ingresa el número de la tarjeta de crédito"
  form.appendChild(textCreditCard);
  const inputNumberCreditCard = document.createElement("input");
  inputNumberCreditCard.setAttribute("id", "creditCardNum");
  inputNumberCreditCard.setAttribute("placeholder", "Sólo valores numéricos (0-9)");        
  form.appendChild(inputNumberCreditCard);
  const buttonForm = document.createElement("button");
  buttonForm.classList.add("actionButton")
  buttonForm.innerHTML = "Validar tarjeta";
  form.appendChild(buttonForm);
  
  const completeForm = {form, textName, inputName, textCreditCard, inputNumberCreditCard, buttonForm};
  return completeForm;
}

function createCard(numb, name, franchise){

  const creditCardContainer = document.createElement("section");
  creditCardContainer.classList.add("creditCardContainer");
  const creditCard = document.createElement("section");
  creditCard.classList.add("creditCardStyle");
  const headerSection = document.createElement("section");
  headerSection.classList.add("headerSection");
  creditCard.appendChild(headerSection);
  const pigImage = document.createElement("img");
  pigImage.setAttribute("src", "./img/pig2.png");
  headerSection.appendChild(pigImage);
  const bankName = document.createElement("p");
  bankName.innerHTML = "ValiBank";
  headerSection.appendChild(bankName);
  const chip = document.createElement("img");
  chip.setAttribute("src","./img/chip.png");
  chip.setAttribute("id","chip");
  creditCard.appendChild(chip);
  const mainSection = document.createElement("section");
  mainSection.classList.add("mainSection");
  creditCard.appendChild(mainSection);
  const numberAndNameSection = document.createElement("div");
  mainSection.appendChild(numberAndNameSection);
  const numberInCard = document.createElement("p");
  numberInCard.setAttribute("id","numb");
  numberInCard.innerHTML = numb;
  numberAndNameSection.appendChild(numberInCard);
  const nameInCard = document.createElement("p");
  nameInCard.setAttribute("id","nameCc");
  nameInCard.innerHTML = name;
  numberAndNameSection.appendChild(nameInCard);
  const franchiseImage = document.createElement("img");
  franchiseImage.setAttribute("src", franchise);
  mainSection.appendChild(franchiseImage);
  creditCardContainer.appendChild(creditCard);
      
  return creditCardContainer;
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



      
