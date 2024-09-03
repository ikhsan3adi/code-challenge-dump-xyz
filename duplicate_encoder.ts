// https://www.codewars.com/kata/54b42f9314d9229fd6000d9c/train/typescript

export function duplicateEncode(word: string) {
  const duplicates = word.toLowerCase().split('').filter((e, i, arr) => arr.indexOf(e) !== i);

  return word
    .toLowerCase()
    .split('')
    .map(e => duplicates.includes(e) ? ')' : '(')
    .join('')
}

console.log(duplicateEncode('aFeePdeebkve'));
