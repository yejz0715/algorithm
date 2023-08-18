//한다 안한다

function solution(input) {
    const num = Math.floor(input.length / 2);
    return input[num - 1] === input[num] ? "Do-it" : "Do-it-Not";
}

const [t, ...input] = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");
for (let i = 0; i < t; i++) {
    console.log(solution(input[i]));
}
