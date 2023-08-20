//피보나치 수5

const readline = require("readline");

function solution(input) {
    let num = Number(input);

    const fibo = (n) => {
        if (n === 0) return 0;
        if (n === 1) return 1;
        return fibo(n - 1) + fibo(n - 2);
    };

    return fibo(num);
}
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
rl.on("line", (line) => {
    console.log(solution(line));
});
