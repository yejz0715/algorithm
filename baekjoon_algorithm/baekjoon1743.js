//음식물 피하기_bfs()
/*
3 4 5
3 2
2 2
3 1
2 3
1 1
*/
const readline = require("readline");

function solution(input) {
    //사방탐색
    const dxdy = [
        [1, 0],
        [-1, 0],
        [0, -1],
        [0, 1],
    ];
    const [N, M] = input[0].split(" ").map(Number); //전체 크기
    const map = input.splice(1).map((item) => item.split(" ").map(Number));
    let isIn = (dx, dy) => 0 <= dx && 0 <= dy && dx < N && dy < M; //범위체크
    let isVisited = Array.from({ length: N }, () => Array(M).fill(false)); //방문체크
    const graph = Array.from({ length: N }, () => Array(M).fill(0)); //음식물이 떨어진 좌표

    //음식물이 떨어진 좌표를 그래프에 1로 표시
    for (let line of map) {
        const [x, y] = line;
        graph[x - 1][y - 1] = 1;
    }

    const bfs = (x, y) => {
        let count = 1;
        isVisited[x][y] = true;
        const queue = [[x, y]];
        while (queue.length > 0) {
            const [x, y] = queue.shift();

            for (let line of dxdy) {
                let nx = x + line[0];
                let ny = y + line[1];

                //범위에 벗어나거나 방문했거나 그래프가 0인경우
                if (!isIn(nx, ny) || isVisited[nx][ny] || graph[nx][ny] !== 1)
                    continue;

                count++;
                isVisited[nx][ny] = true;
                queue.push([nx, ny]);
            }
        }
        return count;
    };
    let answer = [];
    for (let x = 0; x < N; x++) {
        for (let y = 0; y < M; y++) {
            if (isVisited[x][y] || graph[x][y] !== 1) continue;
            answer.push(bfs(x, y));
        }
    }

    return answer.sort((a, b) => b - a)[0];
}
let arr = [];
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
rl.on("line", (line) => {
    arr.push(line);
    if (arr.length - 1 === Number(arr[0].split(" ")[2])) {
        console.log(solution(arr));
        rl.close();
    }
});
