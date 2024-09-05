// https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1/train/typescript

export const duplicateCount = (text: string): number => new Set(text.toLowerCase().split('').filter((e, i, arr) => arr.indexOf(e) !== i)).size;


console.log(duplicateCount('Indivisibility'));