function convertToRoman(num) {
  let roman = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
  };

  let ending = "";

  for (let key in roman) {
    console.log(key);
    while (num >= roman[key]) {
      ending += key;
      num -= roman[key];
      console.log(num);
    }
  }
  return ending;
}
convertToRoman(36);