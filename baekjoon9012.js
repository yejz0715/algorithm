//괄호
function solution(input) {
    let i = 0;
    let answer = 0;
    while (i !== input.length) {
        if (input[i] === "(") {
            answer += 1;
        } else if (input[i] === ")") {
            answer -= 1;
        }

        if (answer < 0) {
            return "NO";
        }

        i++;
    }

    if (answer !== 0) {
        return "NO";
    } else {
        return "YES";
    }
}

const [num, ...input] = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");

for (let i = 0; i < num; i++) {
    console.log(solution(input[i]));
}
