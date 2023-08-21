//더하기 사이클

const readline = require("readline");

function solution(input) {
    const num = input.length === 1 ? 0 + input : input;
    let count = 0;
    let newNum;

    let a = num[0];
    let b = num[1];
    while (num !== newNum) {
        newNum = Number(a) + Number(b);
        a = b.toString();
        b = newNum.toString().slice(-1);
        newNum = a + b;

        count++;
    }
    return count;
}
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
rl.on("line", (line) => {
    console.log(solution(line));
    rl.close();
});
