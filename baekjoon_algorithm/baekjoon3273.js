//두수의 합_투포인터
/*
9
5 12 7 10 9 1 2 3 11
13
*/
const readline = require("readline");

function solution(input) {
    const num = Number(input[1]);
    const arr = input[0]
        .split(" ")
        .map(Number)
        .sort((a, b) => a - b);
    let count = 0;
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        if (arr[left] + arr[right] === num) {
            count++;
            left++;
            right--;
            continue;
        }
        if (arr[left] + arr[right] < num) {
            left++;
        } else {
            right--;
        }
    }

    return count;
}
let arr = [];
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
rl.on("line", (line) => {
    arr.push(line);
    if (arr.length === 3) {
        arr.shift();
        console.log(solution(arr));
        rl.close();
    }
});
