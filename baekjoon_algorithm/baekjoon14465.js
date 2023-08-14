//소가 길을 건너간 이유5_슬라이딩윈도우
/*
10 6 5
2
10
1
5
9
*/
const readline = require("readline");

function solution(input) {
    const [N, K, B] = input[0].split(" ").map(Number);
    const offLight = input.slice(1).map(Number);

    let lightArr = Array(N + 1).fill(0);

    for (let line of offLight) {
        //고장난 신호등은 1
        lightArr[line] = 1;
    }
    let sum = lightArr.slice(1, K + 1).reduce((a, b) => a + b);

    let min = sum;

    for (let i = K + 1; i <= N; i++) {
        sum = sum - lightArr[i - K] + lightArr[i];
        min = Math.min(min, sum);
    }
    return min;
}
let arr = [];
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
rl.on("line", (line) => {
    arr.push(line);
    if (arr.length - 1 === Number(arr[0].split(" ")[2])) {
        console.log(solution(arr));
        rl.close();
    }
});
