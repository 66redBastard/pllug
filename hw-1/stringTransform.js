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
