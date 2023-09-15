//약수의 합

function solution(num) {
    const arr = [];
    let sum = 0;
    for (let i = 1; i <= num; i++) {
        if (num % i === 0 && i !== num) {
            arr.push(i);
            sum += i;
        }
    }
    if (sum !== num) {
        return `${num} is NOT perfect.`;
    } else {
        return num + " = " + arr.join(" + ");
    }
}

const input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");

for (let i = 0; i < input.length - 1; i++) {
    console.log(solution(Number(input[i])));
}
