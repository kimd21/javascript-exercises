const reverseString = function(word) {
  let str = '';
  for (let i = 0; i < word.length; i++) {
    str += word[word.length - i - 1];
  }
  return str;
}

module.exports = reverseString
