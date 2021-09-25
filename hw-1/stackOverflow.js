const gg = "gg";
const math = Math.pow(420, 0.5);

function overflow(gg, math) {
  console.log(gg + " " + math);
  return overflow(gg, math);
}
overflow(gg, math); //?

// Quokka 'stackOverflow.js' (node: v14.17.0)​​​​
// OUTPUT:
// {"message":"Maximum call stack size exceeded","stack":"[wallaby core]/server.js:1\nRangeError: Maximum call stack size exceeded\n    at u.stringify [as _JSONStringify] (<anonymous>)\n    at u._send ([wallaby core]/server.js:27:27402)\n    at u._sendLog ([wallaby core]/server.js:27:27223)\n    at [wallaby core]/server.js:27:25721\n    at u._doWhenReceiverIsReady ([wallaby core]/server.js:27:23725)\n    at u.log ([wallaby core]/server.js:27:25235)\n    at overflow (./hw-1/stackOverflow.js:6:33)\n    at overflow (./hw-1/stackOverflow.js:7:30)\n    at overflow (./hw-1/stackOverflow.
