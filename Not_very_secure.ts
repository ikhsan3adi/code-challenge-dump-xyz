// https://www.codewars.com/kata/526dbd6c8c0eb53254000110/train/typescript

export const alphanumeric = (string: string): boolean => !!string.match("^[a-zA-Z0-9]+$")

console.log(alphanumeric(''));
