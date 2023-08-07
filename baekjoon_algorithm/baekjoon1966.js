//프린터 큐
function solution(M, arr) {
    // 큐에 인덱스와 우선순위를 추가
    const queue = [];
    arr.forEach((item, index) => {
        queue.push([index, item]);
    });

    let work = 0; // 작업한 수

    while (true) {
        const currValue = queue.shift();

        // 현재 프린터기보다 우선순위 높은 작업이 존재한다면 맨 뒤로.
        if (queue.some((item) => currValue[1] < item[1])) {
            queue.push(currValue);
            continue;
        }

        // 우선순위가 가장 높다면++
        work++;

        if (currValue[0] === M) {
            break;
        }
    }
    return work;
}
let [t, ...input] = require("fs")
    .readFileSync("./1966.txt")
    .toString()
    .trim()
    .split("\n");

const testCase = parseInt(t);
let line = 0;

//testCase
for (let tc = 1; tc <= testCase; tc++) {
    const [N, M] = input[line].split(" ").map(Number);
    const arr = input[line + 1].split(" ").map(Number);
    line += 2;
    console.log(solution(M, arr));
}
