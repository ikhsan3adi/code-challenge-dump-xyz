// https://www.codewars.com/kata/5648b12ce68d9daa6b000099/train/typescript
// 7 kyu

export function number(busStops: [number, number][]): number {
  return busStops.reduce((carry, current) => [carry[0] + current[0] - current[1], 0])[0]
}

console.log(number([[10, 0], [3, 5], [5, 8]]));
console.log(number([[3, 0], [9, 1], [4, 10], [12, 2], [6, 1], [7, 10]]));
console.log(number([[3, 0], [9, 1], [4, 8], [12, 2], [6, 1], [7, 8]]));
console.log(number([[0, 0]]));