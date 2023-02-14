const validator = {
  isValid: (userNum) => {
    const array1 = creditCardReverse(userNum);
    const array2 = multiplyEvenIndex(array1);
    return validateMutipleOf10(array2);
  },
  maskify: () => {

  },
};

// Convierte el String del usuario en array, lo reversa y lo convierte en array numerico
function creditCardReverse(userNum) {
  let arrayString = Array.from(userNum);
  arrayString = arrayString.reverse();
  const arrayNum = arrayString.map((num) => Number(num));
  console.log(arrayNum);
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
  console.log(arr);
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
    console.log(sum);
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
  console.log(total);
  if(total % 10 === 0){
    return true;
  }else{
    return false;
  }
}









export default validator;
