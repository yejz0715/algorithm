//대회 or 인턴
const [N, M, K] = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .split(" ")
    .map((item) => Number(item));

function solution(N, M, K) {
    let cnt = 0;

    while (N >= 2 && M >= 1 && N + M >= K + 3) {
        N -= 2;
        M -= 1;
        cnt += 1;
    }
    return cnt;
}
console.log(solution(N, M, K));
