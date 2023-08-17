//거스름돈

const readline = require("readline");

function solution(input) {
    let money = 1000 - Number(input);
    const arr = [500, 100, 50, 10, 5, 1];
    let count = 0;
    let left = 0;
    while (money !== 0) {
        if (money < arr[left]) {
            left++;
        } else {
            money = money - arr[left];
            count++;
        }
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
