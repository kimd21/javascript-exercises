const repeatString = function(word, numberOfTimes) {
let str = '';
if (numberOfTimes < 0) {return 'ERROR';}
for (let i = 0; i < numberOfTimes; i++) {
  str += word;
}
return str;
}

module.exports = repeatString
