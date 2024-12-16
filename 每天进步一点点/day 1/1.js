const s = '123'
s.c = '4';
s.d = '5';

const [a, b] = s;
const { c, d } = s;

console.log(a, b, c, d);

