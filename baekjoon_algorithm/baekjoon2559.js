//수열_슬라이딩 윈도우 알고리즘

function solution(N, K, nums) {
    let maxValue = Number.MIN_SAFE_INTEGER;
    let sum = 0;

    //0-K 합 저장
    for (let i = 0; i < K; i++) {
        sum += nums[i];
    }
    maxValue = Math.max(maxValue, sum);

    for (let i = K; i < N; i++) {
        sum = sum - nums[i - K] + nums[i]; //왼쪽 수는 빼고 오른쪽 수는 더해준다
        maxValue = Math.max(maxValue, sum);
    }
    return maxValue;
}

const input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");

const [N, K] = input[0].split(" ").map(Number);
const nums = input[1].split(" ").map(Number);
console.log(solution(N, K, nums));
