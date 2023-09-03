//연결요소의 개수

function solution(input) {
    const [[N, S], ...arr] = input.map((item) => item.split(" ").map(Number));
    const isVisited = Array(N + 1).fill(false);
    const graph = Array.from({ length: N + 1 }, () => []);
    let count = 0;

    for (let line of arr) {
        const [from, to] = line;
        graph[from].push(to);
        graph[to].push(from);
    }

    const dfs = (n) => {
        isVisited[n] = true;
        for (let item of graph[n]) {
            if (isVisited[item]) continue;
            isVisited[item] = true;
            dfs(item);
        }
    };

    for (let i = 1; i <= N; i++) {
        if (isVisited[i]) continue;
        count++;
        dfs(i);
    }

    return count;
}

const input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");

console.log(solution(input));
