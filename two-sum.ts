// 6 kyu
// https://www.codewars.com/kata/52c31f8e6605bcc646000082/train/javascript

const twoSum = (numbers: number[], target: number) => {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === target) {
        return [i, j]
      }
    }
  }
}