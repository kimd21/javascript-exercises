const removeFromArray = function(...args) {
  // for (let i = 0; i < arr1.length; i++) {
  //   for (let j = 0; j < arr2.length; j++) {
  //     if (arr1[i] === arr2[j]) {
  //       arr1.splice(i, 1);
  //       i--;
  //     }
  //   }
  // }
  // return arr1;
  const arr = args[0];
  return arr.filter(val => !args.includes(val));
}

module.exports = removeFromArray
