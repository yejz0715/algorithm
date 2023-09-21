//가위바위보
function solution(input) {
    let score = 0;
    for (let line of input) {
        const [left, right] = line;
        if (left === right) {
            score += 0;
        } else if (
            (left === "R" && right === "S") ||
            (left === "P" && right === "R") ||
            (left === "S" && right === "P")
        ) {
            score += 1;
        } else if (
            (left === "R" && right === "P") ||
            (left === "P" && right === "S") ||
            (left === "S" && right === "R")
        ) {
            score -= 1;
        }
    }

    if (0 < score) {
        answer = "Player 1";
    } else if (score < 0) {
        answer = "Player 2";
    } else {
        answer = "TIE";
    }
    return answer;
}
const [tc, ...input] = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");

let line = 0;
for (let testCase = 0; testCase < tc; testCase++) {
    const k = Number(input[line]);
    const tmp = [];
    line++;
    for (let i = line; i < line + k; i++) {
        tmp.push(input[i].split(" "));
    }
    line += k;
    console.log(solution(tmp));
}
