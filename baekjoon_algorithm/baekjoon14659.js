//한조서열정리하고옴ㅋㅋ
/*
7
6 4 10 2 5 7 11
*/
const readline = require("readline");

function solution(input) {
    const length = Number(input[0]);
    const arr = input[1].split(" ").map(Number);
    let count = 0;
    let maxNum = 0;

    arr.forEach((item, index) => {
        for (let i = index + 1; i < length; i++) {
            if (item < arr[i]) {
                break;
            }
            count++;
        }

        maxNum = Math.max(maxNum, count);
        count = 0;
    });
    return maxNum;
}
let arr = [];
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
rl.on("line", (line) => {
    arr.push(line);
    if (arr.length === 2) {
        console.log(solution(arr));
        rl.close();
    }
});
