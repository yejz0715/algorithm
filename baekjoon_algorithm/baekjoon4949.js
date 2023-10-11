//균형잡힌 세상

function solution(input) {
    let stack = "";
    const regex = /[\(|\)|\[|\]]/g;

    if (!regex.test(input)) {
        return "yes";
    } else {
        for (let i = 0; i < input.length; i++) {
            if (
                input[i] === "(" ||
                input[i] === "[" ||
                input[i] === ")" ||
                input[i] === "]"
            ) {
                stack += input[i];
            }
            stack = stack.replace(/(\(\)|\[\])/g, "");
        }
    }

    return stack === "" ? "yes" : "no";
}

const input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");

for (let i = 0; i < input.length - 1; i++) {
    console.log(solution(input[i]));
}
