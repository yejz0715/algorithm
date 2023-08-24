//부분수열의 합

function solution(input) {
    const [N, S] = input[0].split(" ").map(Number);
    const arr = input[1].split(" ").map(Number);
    let count = 0;
    const dfs = (index, sum) => {
        if (index === N) {
            return;
        }

        sum += arr[index];

        if (sum === S) {
            count++;
        }

        dfs(index + 1, sum);
        dfs(index + 1, sum - arr[index]);
    };

    dfs(0, 0);
    return count;
}

const input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");
console.log(solution(input));
