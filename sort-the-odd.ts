// 6 kyu
// https://www.codewars.com/kata/578aa45ee9fd15ff4600090d/train/javascript

const sortArray = (array: number[]) => {
  const arr = array.map(e => Math.abs(e % 2) === 1 ? 'odd' : e)
  const odds = array.filter(e => Math.abs(e % 2) === 1).sort((a, b) => a - b)
  return arr.map(e => e === 'odd' ? odds.shift() : e)
}

console.log(sortArray([3, 1, 9, 2, -49, 5, 4, 7, 6, 7, 8, -11]))