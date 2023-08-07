//공넣기
/*
5 4
1 2 3
3 4 4
1 4 1
2 2 2
*/
const readline = require("readline");
function solution(input) {
    const N = Number(input[0].split(" ")[0]);
    let arr = new Array(N).fill(0);
    const nums = input.splice(1).map((item) => item.split(" ").map(Number));
    let b = 0;
    for (let line of nums) {
        for (let i = line[0]; i <= line[1]; i++) {
            b = i;
            arr[b - 1] = line[2];
        }
    }

    return arr.join(" ");
}
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
let arr = [];
rl.on("line", (line) => {
    arr.push(line);
    if (Number(arr[0].split(" ")[1]) === arr.length - 1) {
        console.log(solution(arr));
        rl.close();
    }
});
