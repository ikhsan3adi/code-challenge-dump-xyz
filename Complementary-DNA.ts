// 7 kyu
// https://www.codewars.com/kata/554e4a2f232cdd87d9000038/train/typescript

export class Kata {
  static dnaStrand = (dna: string) => dna.split('').map(e => ({
    A: 'T',
    T: 'A',
    C: 'G',
    G: 'C',
  }[e])).join('')
}

console.log(Kata.dnaStrand('ATTGC'));
