/*
  The Fibonacci Sequence is the series of numbers:
    0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...

  First 2 numbers are 0 and 1.

  The next number is found by adding up the two numbers before it.
  The 1 is found by adding the two numbers before it (0+1).
  The 2 is found by adding the two numbers before it (1+1).
  And the 3 is (1+2),
  And so on.

  Only fibonacci function should be edited. Main function is forbidden to edit.

*/

const fibonacci = () => {
  var j = 0;
  let arr = [0, 1];
  return function () {
    if (j === 0) {
      j += 1;
      return 0;
    } else if (j === 1) {
      let sum = arr[j];
      j += 1;
      return sum;
    } else {
      console.log(j);
      let sum = arr[j - 2] + arr[j - 1];
      arr.push(sum);
      j += 1;
      return sum;
    }
  };
};

const main = () => {
  const f = fibonacci();

  for (let i = 0; i < 10; i++) {
    console.log(f());
  }
};

main(); // Output should be the next: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34
