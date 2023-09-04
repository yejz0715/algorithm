//달팽이는 올라가고싶다

const [A, B, V] = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split(" ")
    .map(Number);

const answer = Math.ceil((V - B) / (A - B));
console.log(answer);
