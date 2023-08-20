//약수 구하기

const readline = require("readline");

function solution(input) {
    const N = Number(input.split(" ")[0]);
    const K = Number(input.split(" ")[1]);
    let arr = [];
    for (let i = 1; i <= N; i++) {
        if (N % i === 0) {
            arr.push(i);
        }
    }
    return arr[K - 1] === undefined ? 0 : arr[K - 1];
}
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
rl.on("line", (line) => {
    console.log(solution(line));
});
