//숫자의 개수

function solution(input) {
    let answer = Array(10).fill(0);
    input
        .toString()
        .split("")
        .map(Number)
        .map((item) => {
            answer[item]++;
        });

    return answer.join("\n");
}

const input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map(Number)
    .reduce((a, b) => a * b);

console.log(solution(input));
