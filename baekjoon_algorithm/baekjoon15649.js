//N과 M(1)_순열

function solution(N, M) {
    //N:전체 수, M: 뽑을 수의 개수
    let isSelected = Array(N + 1).fill(false); //선택여부
    let answer = [];
    let nums = [];

    const dfs = (cnt) => {
        //종료조건
        if (M === cnt) {
            let tmp = nums.join(" ");
            answer.push(tmp);
            return;
        }

        for (let i = 1; i <= N; i++) {
            if (isSelected[i]) continue;

            isSelected[i] = true;

            nums[cnt] = i;

            dfs(cnt + 1);

            isSelected[i] = false; //백트레킹
        }
    };

    dfs(0);
    return answer.join("\n");
}

const [N, M] = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .split(" ")
    .map(Number);

console.log(solution(N, M));
