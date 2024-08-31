// 7 kyu
// https://www.codewars.com/kata/554b4ac871d6813a03000035

export class Kata {
  static highAndLow(numbers: string): string {
    if (numbers.split(' ').length === 1) return `${numbers} ${numbers}`
    return numbers
      .split(' ')
      .sort((a, b) => Number(b) - Number(a))
      .filter((_, i, arr) => i === 0 || i === arr.length - 1)
      .join(' ')
  }
}

console.log(Kata.highAndLow('42'));
