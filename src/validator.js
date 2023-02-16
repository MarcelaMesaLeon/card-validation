const validator = {
  isValid: (userNum) => {
    const array1 = creditCardReverse(userNum);
    const array2 = multiplyEvenIndex(array1);
    return validateMutipleOf10(array2);
  },
  maskify: (userNum) => {
    const stringToArray = Array.from(userNum);
    const stringComplete = textToShow(stringToArray);
    return stringComplete;
  },
  franchise: (userNum) => {
    let image = "";
    if(userNum.slice(0, 4) === "1800"){
      image = "./img/jcb.png"; 
    } else if((userNum.slice(0, 4) === "2014" || userNum.slice(0, 4) === "2149") 
    || (userNum.slice(0, 3) === "300" || userNum.slice(0, 3) === "301" || userNum.slice(0, 3) === "302" || userNum.slice(0, 3) === "303" || userNum.slice(0, 3) === "304" || userNum.slice(0, 3) === "305") 
    || (userNum.slice(0, 2) === "36" || userNum.slice(0, 2) === "38")){
      image = "./img/dinersClub.png"; 
    } else if(userNum.slice(0, 2) === "34" || userNum.slice(0, 2) === "37"){
      image = "./img/americanExpress.png"; 
    }else if (userNum.slice(0, 2) === "51" || userNum.slice(0, 2) === "52" || userNum.slice(0, 2) === "53" || userNum.slice(0, 2) === "54" || userNum.slice(0, 2) === "55"){
      image = "./img/mastercard.png";
    }else if (userNum.slice(0, 1) === "4"){
      image = "./img/visa.png";
    }else if(userNum.slice(0, 4) === "6011" || userNum.slice(0, 4) === "2131"){
      image = "./img/discover.png"; 
    }else{
      image;
    }
    return image;  
  }
};

// isValid

// Convierte el String del usuario en array, lo reversa y lo convierte en array numerico
function creditCardReverse(userNum) {
  let arrayString = Array.from(userNum);
  arrayString = arrayString.reverse();
  const arrayNum = arrayString.map((num) => Number(num));
  return arrayNum;  
}

// Multiplica x2 el numero que esta en las posiciones que son par y devuelve el array con elementos de un solo digito
function multiplyEvenIndex(arr) {
  for (let i = 0; i < arr.length; i++) {
    if ((i + 1) % 2 === 0) {
      arr[i] = arr[i] * 2;
      arr[i] = sumElements(arr[i]);
    }
  }
  return arr;
}

// Suma los digitos de un numero
function sumElements(index) {
  let numToString = index.toString();
  numToString = numToString.split("");
  if (numToString.length > 1) {
    let sum = 0;
    numToString.forEach((element) => {
      sum += Number(element);
    });
    return sum;
  } else {
    const arrayToString = numToString.toString();
    const stringToNumb = Number(arrayToString);
    return stringToNumb;
  }
}

// Totaliza digitos del array recibido y verifica si el resultado es multiplo de 10
function validateMutipleOf10(arr){
  let total = 0;
  arr.forEach((element) => {
    total += element;
  });  
  if(total % 10 === 0){
    return true;
  }else{
    return false;
  }
}


// maskify

// Devuelve string completo con valores enmascarados y a mostrar solicitados
function textToShow(arr){
  let arrayToMask = arr.slice(0, -4);
  const arrayToShow = arr.slice(-4, arr.length + 1);
  arrayToMask = toReplace(arrayToMask);
  const arrayCompleted = arrayToMask.concat(arrayToShow);
  let arrayToString = arrayCompleted.toString();
  arrayToString = arrayToString.replaceAll(",", "");
  
  return arrayToString;
}

// Reemplaza los valores de los elementos del array proporcionado por caracter # 
function toReplace(arr){
  const replaced = [];

  arr.map(element => {
    replaced.push(element.replace(/[0-9a-z]/, "#")); 
  });
  return replaced;
}











export default validator;
