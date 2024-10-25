/**
 * https://www.codewars.com/kata/545cedaa9943f7fe7b000048/train/javascript
 * @param {string} string 
 */
function isPangram(string) {
  const str = string.toUpperCase()
  for (let ascii = 65; ascii <= 90; ascii++) {
    if (!str.split('').find((v) => v.charCodeAt(0) === ascii)) {
      return false
    }
  }
  return true
}

console.log(isPangram("abcdefghijklmnopqrstuvwxyz")); // true
console.log(isPangram("ikhsan satriadi")); // false
