//먹을 것인가 먹힐 것인가

function solution(arrA, arrB) {
    let count = 0;

    for (let line of arrA) {
        let i = 0; //왼쪽 끝
        let j = arrB.length - 1; //오른쪽 끝
        while (i <= j) {
            if (line <= arrB[i]) {
                break;
            }

            if (i === j && line > arrB[i]) {
                i++;
                count++;
                break;
            }
            if (line > arrB[i]) {
                i++;
                count++;
            }
            if (line > arrB[j]) {
                j--;
                count++;
            }
        }
    }

    return count;
}

const [t, ...input] = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");

const testCase = Number(t);
let line = 1;

for (let tc = 0; tc < testCase; tc++) {
    const arrA = input[line]
        .split(" ")
        .map(Number)
        .sort((a, b) => a - b);
    const arrB = input[line + 1]
        .split(" ")
        .map(Number)
        .sort((a, b) => a - b);
    line += 3;
    console.log(solution(arrA, arrB));
}
