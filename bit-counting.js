const countBits = (n) => n.toString(2).split('').filter(e => e === '1').length;

console.log(countBits(5));