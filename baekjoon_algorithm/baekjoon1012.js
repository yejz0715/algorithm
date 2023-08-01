//유기농배추_bfs()
function solution(N, M, tmp) {
    const dxdy = [
        [1, 0],
        [-1, 0],
        [0, -1],
        [0, 1],
    ];

    const isIn = (nx, ny) => 0 <= nx && 0 <= ny && nx < N && ny < M; //범위체크
    const isVisited = Array.from({ length: N }, () => Array(M).fill(false)); //방문체크
    const field = Array.from({ length: N }, () => Array(M).fill(0)); //배추밭

    const bfs = (x, y) => {
        isVisited[x][y] = true;
        const queue = [[x, y]];

        while (queue.length > 0) {
            const [x, y] = queue.shift();

            for (let dir of dxdy) {
                let nx = x + dir[0];
                let ny = y + dir[1];

                if (!isIn(nx, ny) || isVisited[nx][ny] || field[nx][ny] !== 1)
                    continue;

                isVisited[nx][ny] = true;
                queue.push([nx, ny]);
            }
        }
    };

    //배추있으면 1
    for (let line of tmp) {
        const [from, to] = line;
        field[from][to] = 1;
    }

    let count = 0;
    for (let x = 0; x < N; x++) {
        for (let y = 0; y < M; y++) {
            if (isVisited[x][y] || field[x][y] !== 1) continue;
            bfs(x, y);
            count++;
        }
    }

    answer.push(count);
}

// input
const fs = require("fs");
let [t, ...input] = fs.readFileSync("/dev/stdin").toString().split("\n");
const testCase = parseInt(t);
let line = 0;
let answer = [];

// testCase
for (let tc = 0; tc < testCase; tc++) {
    const [N, M, K] = input[line].split(" ").map(Number); //배추밭 크기,배추 개수
    const tmp = [];
    line++;

    //배추밭
    for (let i = line; i < line + K; i++) {
        tmp.push(input[i].split(" ").map(Number));
    }
    line += K;
    solution(N, M, tmp);
}
console.log(answer.join("\n").trim());
