//암기왕_Set()
function solution(firstArr, secondArr) {
    const answer = [];
    for (let line of secondArr) {
        if (firstArr.has(line)) {
            //특정값 있는지 확인
            answer.push(1);
        } else {
            answer.push(0);
        }
    }

    return answer.join("\n");
}

const [t, ...input] = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");

const testCase = Number(t);
for (let tc = 1; tc <= testCase; tc++) {
    input.shift();
    const firstArr = new Set(input.shift().split(" ").map(Number));
    input.shift();
    const secondArr = input.shift().split(" ").map(Number);
    console.log(solution(firstArr, secondArr));
}
