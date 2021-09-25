const str = "tENET";

const stringTransform = (str) => {
  console.log(str);
  let result = "";
  for (let i = 0; i < str.length; i++) {
    let strSymbol = str.charAt(i);
    if (strSymbol == strSymbol.toLowerCase()) {
      result = result.concat("", strSymbol.toUpperCase());
    } else if (strSymbol == strSymbol.toUpperCase()) {
      result = result.concat("", strSymbol.toLowerCase());
    }
  }
  console.log(result);
  return result;
};

stringTransform(str);

// ES6 ternary operator example
const stringTransformTernary = (str) => {
  console.log(str);
  let result = "";

  for (let i = 0; i < str.length; i++) {
    let strSymbol = str.charAt(i);
    const concatResultUpper = result.concat("", strSymbol.toUpperCase());
    const concatResultLower = result.concat("", strSymbol.toLowerCase());

    strSymbol == strSymbol.toLowerCase()
      ? (result = concatResultUpper)
      : (result = concatResultLower);
  }

  console.log(result);
  return result;
};

stringTransformTernary(str);
