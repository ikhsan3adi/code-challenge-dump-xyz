// https://www.codewars.com/kata/55c04b4cc56a697bb0000048/train/typescript

export function scramble(str1: string, str2: string): boolean {
  const arr1 = str1.split('')
  for (const e of str2.split('')) {
    const i = arr1.indexOf(e)
    if (i !== -1) arr1.splice(arr1.indexOf(e), 1)
  }
  return arr1.length + str2.length === str1.length
}

let s1 = "abcdefghijklmnopqrstuvwxyz".repeat(100);
let s2 = "zyxcba".repeat(90);
console.log(scramble(s1, s2))
// console.log(scramble('cedwaraaossoqqyt', 'codewars'))

