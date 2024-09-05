// https://www.codewars.com/kata/545cedaa9943f7fe7b000048/train/typescript

export const isPangram = (phrase: string): boolean => {
  for (let i = 65; i <= 90; i++) // 65 = A -> 90 = Z
    if (!phrase.toUpperCase().includes(String.fromCharCode(i))) return false
  return true
}

console.log(isPangram('The quick brown fox jumps over the lazy dog.')); // true
console.log(isPangram('This is not a pangram.')); // false