//연산자 끼워넣기
/*
2
5 6
0 0 1 0
*/
const readline = require("readline");

function solution(input) {
    let N = Number(input[0]);
    let numbers = input[1].split(" ").map(Number);
    let operTypes = input[2].split(" ").map(Number);
    let answer = "";

    let min = 1000000000;
    let max = -1000000000;

    const dfs = (curr, index, operTypes) => {
        //종료조건
        if (N === index) {
            max = Math.max(max, curr);
            min = Math.min(min, curr);
            return;
        }

        if (operTypes[0] !== 0) {
            operTypes[0] = operTypes[0] - 1;
            dfs(curr + numbers[index], index + 1, operTypes);
            operTypes[0] = operTypes[0] + 1; //백트레킹
        }
        if (operTypes[1] !== 0) {
            operTypes[1] = operTypes[1] - 1;
            dfs(curr - numbers[index], index + 1, operTypes);
            operTypes[1] = operTypes[1] + 1;
        }
        if (operTypes[2] !== 0) {
            operTypes[2] = operTypes[2] - 1;
            dfs(curr * numbers[index], index + 1, operTypes);
            operTypes[2] = operTypes[2] + 1;
        }
        if (operTypes[3] !== 0) {
            operTypes[3] = operTypes[3] - 1;
            dfs(~~(curr / numbers[index]), index + 1, operTypes);
            operTypes[3] = operTypes[3] + 1;
        }
    };

    dfs(numbers[0], 1, operTypes);

    answer = max + "\n" + min;
    return answer;
}
let arr = [];
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
rl.on("line", (line) => {
    arr.push(line);
    if (arr.length === 3) {
        console.log(solution(arr));
        rl.close();
    }
});
