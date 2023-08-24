//dfs와 bfs

function solution(input) {
    let answer = [];
    const [[N, M, K], ...map] = input.map((item) =>
        item.split(" ").map(Number)
    );
    const dfsIsVisited = Array(N + 1).fill(false);
    const bfsIsVisited = Array(N + 1).fill(false);
    const graph = Array.from({ length: N + 1 }, () => []); //인접행렬

    const dfs = (x) => {
        dfsIsVisited[x] = true;

        answer += x + " ";
        for (let item of graph[x]) {
            if (dfsIsVisited[item]) continue;
            dfsIsVisited[item] = true;
            dfs(item);
        }
    };
    const bfs = (x) => {
        const queue = [x];
        bfsIsVisited[x] = true;

        while (queue.length !== 0) {
            const x = queue.shift();
            answer += x + " ";

            for (let item of graph[x]) {
                if (bfsIsVisited[item]) continue;
                bfsIsVisited[item] = true;
                queue.push(item);
            }
        }
    };

    //인접행렬
    for (let line of map) {
        line = line.sort();
        console.log(line);
        const [from, to] = line;
        graph[from].push(to);
        graph[to].push(from);
    }
    //인접행렬 정렬
    for (let i = 1; i <= N; i++) {
        graph[i] = graph[i].sort((a, b) => a - b);
    }

    dfs(K);
    answer += "\n";
    bfs(K);
    return answer;
}

const input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");

console.log(solution(input));
