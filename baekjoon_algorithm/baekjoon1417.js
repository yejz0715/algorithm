//국회의원 선거

const readline = require("readline");
function solution(input) {
    let count = 0;
    let dasom = Number(input[0]);
    let arr = input
        .splice(1)
        .map(Number)
        .sort((a, b) => b - a);

    while (dasom <= arr[0]) {
        arr[0]--;
        dasom++;
        count++;
        arr.sort((a, b) => b - a);
    }

    return count;
}
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
let arr = [];
rl.on("line", (line) => {
    arr.push(line);
    if (Number(arr[0]) === arr.length - 1) {
        arr.shift();
        console.log(solution(arr));
        rl.close();
    }
});
