//특정 거리의 도시 찾기_bfs()
/*
4 4 2 1
1 2
1 3
2 3
2 4
*/
const input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");

function solution(input) {
    let answer = [];
    const [[N, M, K, X], ...map] = input.map((item) =>
        item.split(" ").map(Number)
    );

    const isVisited = Array(N + 1).fill(0); //방문배열_이동거리
    const graph = Array.from({ length: N + 1 }, () => []); //인접행렬

    const bfs = (x) => {
        isVisited[x] = 1; //방문체크
        const queue = [x];

        while (queue.length > 0) {
            const node = queue.shift();

            //최단거리 k인지 체크
            if (isVisited[node] === K + 1) {
                answer.push(node);
                continue;
            }
            //방문체크와 거리count를 한번에
            for (let num of graph[node]) {
                if (isVisited[num] !== 0) continue;
                isVisited[num] = isVisited[node] + 1;
                queue.push(num);
            }
        }
    };

    //graph
    for (let line of map) {
        const [from, to] = line;
        graph[from].push(to);
    }

    bfs(X);

    return answer.length !== 0 ? answer.sort((a, b) => a - b).join("\n") : -1;
}

console.log(solution(input));
