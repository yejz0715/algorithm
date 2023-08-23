//A->B

function solution(A, B) {
    let answer = -1;
    const dfs = (A, count) => {
        console.log(A, count);
        A = Number(A);

        if (A > B) {
            return;
        }
        if (A === B) {
            if (answer === -1 || answer > count) {
                answer = count + 1;
            }
            return;
        }

        dfs(A * 2, count + 1);
        dfs(A + "1", count + 1);
    };
    dfs(A, 0);
    return answer;
}

const [A, B] = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split(" ")
    .map(Number);

console.log(solution(A, B));
