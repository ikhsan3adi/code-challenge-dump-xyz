// 5 kyu
// https://www.codewars.com/kata/52bc74d4ac05d0945d00054e/train/javascript

/**
 * 
 * @param {string} s 
 */
function firstNonRepeatingLetter(s) {
  const duplicates = s.toLowerCase().split('').filter((e, i, arr) => arr.indexOf(e) !== i);
  for (const e of s.split('')) {
    if (!duplicates.includes(e.toLowerCase())) return e
  }
  return ''
}

console.log(firstNonRepeatingLetter('stTReSS'));
