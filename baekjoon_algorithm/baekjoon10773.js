//제로_스택

function solution(tc, input) {
    const nums = [];
    let answer = 0;
    let i = 0;
    while (i !== tc) {
        if (0 !== input[i]) {
            nums.push(input[i]);
        } else {
            nums.pop();
        }
        i++;
    }
    answer = nums.length !== 0 ? nums.reduce((a, b) => a + b) : 0;

    return answer;
}

const [tc, ...input] = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map(Number);

console.log(solution(tc, input));
