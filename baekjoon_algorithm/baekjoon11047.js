//동전 0
/*
10 4200
1
5
10
50
100
500
1000
5000
10000
50000
*/
const readline = require("readline");

function solution(input) {
    let money = input[0].split(" ").map(Number)[1];
    const coins = input
        .slice(1)
        .map(Number)
        .sort((a, b) => b - a);
    let count = 0;
    let i = 0;
    while (money !== 0) {
        if (money >= coins[i]) {
            money = money - coins[i];
            count++;
        } else {
            i++;
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
    if (arr.length - 1 === Number(arr[0].split(" ")[0])) {
        console.log(solution(arr));
        rl.close();
    }
});
