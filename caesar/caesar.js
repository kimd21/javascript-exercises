// const caesar = function(str, shift) {
//   let ucode = str.split('').map(
//     e => 
//       {
//         if ((e.charCodeAt(0) >= 65 && e.charCodeAt(0) <= 90) || 
//         (e.charCodeAt(0) >= 97 && e.charCodeAt(0) <= 122)) {
//           return e.charCodeAt(0) + shift;
//         }
//         return e.charCodeAt(0);
//       }
//   );
//   return ucode.map(e => String.fromCharCode(e)).join('');
// }

const caesar = function(string, shift) {
  return string
    .split("")
    .map(char => shiftChar(char, shift))
    .join("");
};

const codeSet = code => (code < 97 ? 65 : 97);
const mod = (n, m) => (n % m + m) % m;

const shiftChar = (char, shift) => {
  const code = char.charCodeAt();

  if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) {
    return String.fromCharCode(
      mod(code + shift - codeSet(code), 26) + codeSet(code)
    );
  }
  return char;
};

module.exports = caesar
