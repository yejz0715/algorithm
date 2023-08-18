//안테나
const [N, input] = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");

const arr = input
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);

const centerIdx = Math.floor((N - 1) / 2);

console.log(arr[centerIdx]);
