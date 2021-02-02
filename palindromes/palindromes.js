const palindromes = function(str) {
  let modStr = str
    .toLowerCase()
    .trim()
    .replace(/\W|\d|\s/g, '');
  
  return modStr === modStr.split('').reverse().join('');

  // const len = modStr.length;
  // let rStr = '';
  // let lStr = '';
  // if (len % 2 === 0) {
  //   rStr = modStr.slice(0, len/2);
  //   lStr = modStr.slice(len/2 + 1, len)
  // }
  // else {
  //   rStr = modStr.slice(0, Math.floor(len/2));
  //   lStr = modStr.slice(Math.floor(len/2) + 1, len);
  // }
  // return rStr === lStr.split('').reverse().join('')
}

module.exports = palindromes
