//공
/*
4
3 1
2 3
3 1
3 2
*/
const readline = require("readline");

function solution(input) {
    let nums = input.map((item) => item.split(" ").map(Number));
    let target = 1;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i].some((item) => item === target)) {
            if (nums[i][0] !== target) {
                target = nums[i][0];
            } else {
                target = nums[i][1];
            }
        }
    }
    return target;
}
let arr = [];
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
rl.on("line", (line) => {
    arr.push(line);
    if (arr.length - 1 === Number(arr[0])) {
        arr.shift();
        console.log(solution(arr));
        rl.close();
    }
});
