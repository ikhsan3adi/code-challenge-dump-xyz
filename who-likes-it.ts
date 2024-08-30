// 6 kyu
// https://www.codewars.com/kata/5266876b8f4bf2da9b000362/train/typescript

export const likes = (a: string[]): string => {
  if (a.length >= 4) return `${a[0]}, ${a[1]} and ${a.length - 2} others like this`
  if (a.length >= 2) return `${a.splice(0, a.length - 1).join(', ')} and ${a.pop()} like this`
  if (a.length === 1) return `${a} likes this`
  return 'no one likes this'
}

console.log(likes(['Alex', 'Jacob', 'Sussy']));
