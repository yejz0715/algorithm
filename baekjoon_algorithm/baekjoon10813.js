//공넣기
/*
5 4
1 2
3 4
1 4
2 2
*/
const readline = require("readline");
function solution(input) {
    const N = Number(input[0].split(" ")[0]);
    let arr = input.splice(1).map((item) => item.split(" ").map(Number));
    let answer = Array(N + 1).fill(0);
    for (let i = 0; i <= N; i++) {
        answer[i] += i;
    }

    for (let item of arr) {
        let tmp = answer[item[0]];
        answer[item[0]] = answer[item[1]];
        answer[item[1]] = tmp;
    }
    return answer.splice(1).join(" ");
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
