const validator = {
  isValid: (userNum) => {
    creditCardReverse(userNum);
  },
  maskify: () => {},
};



function creditCardReverse(userNum) {
  let arrayString = Array.from(userNum);
  arrayString = arrayString.reverse();
  const arrayNum = arrayString.map((num) => Number(num));
  console.log(arrayNum);
}

export default validator;
