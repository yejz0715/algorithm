//블로그_슬라이딩윈도우
/*
7 5
1 1 1 1 1 5 1
*/
const readline = require("readline");

function solution(input) {
    const answer = "";
    let count = 1;
    let [N, X] = input[0].split(" ").map(Number);
    let arr = input[1].split(" ").map(Number);
    let sum = arr.slice(0, X).reduce((a, b) => a + b);
    let max = Number.MIN_SAFE_INTEGER;
    max = Math.max(sum, max);

    for (let i = X; i < N; i++) {
        sum = sum - arr[i - X] + arr[i];

        if (sum === max) {
            count++;
        }

        if (max < sum) {
            count = 1;
            max = sum;
        }
    }

    if (max === 0) {
        answer = "SAD";
    } else {
        answer = max + "\n" + count;
    }

    return answer;
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
