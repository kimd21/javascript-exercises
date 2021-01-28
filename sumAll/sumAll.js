const sumAll = function(...args) {
  let largeNumber = 0;
  let smallNumber = 0;
  if (!Number.isInteger(args[0]) || !Number.isInteger(args[1])) {return 'ERROR';}
  if (args[0] < 0 || args[1] < 0) {return 'ERROR';}
  if (args[0] > args[1]) {
    largeNumber = args[0];
    smallNumber = args[1];
  }
  else {
    largeNumber = args[1];
    smallNumber = args[0];
  }
  let sum = 0;
  for (let i = smallNumber; i <= largeNumber; i++) {
    sum += i;
  }
  return sum;
}
module.exports = sumAll
