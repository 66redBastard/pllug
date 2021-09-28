// Дана строка вида 'var_text_hello'. Сделайте из него текст 'VarTextHello'.
const str = "var_text_hello";

const strTransform = (str) => {
  const resultArr = [];
  let arrWords = str.split("_");

  for (let i = 0; i < arrWords.length; i++) {
    let word = arrWords[i];
    word = word.charAt(0).toUpperCase() + word.slice(1);
    resultArr.push(word);
  }

  return resultArr.join("");
};
strTransform(str);
console.log(strTransform(str));
