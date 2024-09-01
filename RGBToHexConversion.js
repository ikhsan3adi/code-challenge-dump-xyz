// 5 kyu
// https://www.codewars.com/kata/513e08acc600c94f01000001/train/javascript

function rgb(r, g, b) {
  const clamp = (v) => Math.min(Math.max(v, 0), 255)
  const toHex = (v) => `0${clamp(v).toString(16)}`.slice(-2)
  return `${toHex(r)}${toHex(g)}${toHex(b)}`.toUpperCase()
}

console.log(rgb(10, 192, 255));
