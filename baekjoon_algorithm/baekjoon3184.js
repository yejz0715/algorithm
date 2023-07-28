//3184_양
/*
6 6
...#..
.##v#.
#v.#.#
#.o#.#
.###.#
...###
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

    const [N, M] = input[0].split(" ").map(Number); //전체범위
    const map = input.splice(1).map((item) => item.split(""));
    const isIn = (nx, ny) => 0 <= nx && 0 <= ny && nx < N && ny < M; //범위체크
    const isVisited = Array.from({ length: N }, () => Array(M).fill(false)); //방문체크

    //전체 양과 늑대의 개수
    let totalO = map
        .map((item) => item.filter((item) => item === "o").length)
        .reduce((a, b) => a + b);
    let totalV = map
        .map((item) => item.filter((item) => item === "v").length)
        .reduce((a, b) => a + b);

    const bfs = (x, y) => {
        //같은 영역에서의 v,o 개수
        let v = 0;
        let o = 0;
        isVisited[x][y] = true;
        const queue = [[x, y]];

        while (queue.length > 0) {
            const [x, y] = queue.shift();

            if (map[x][y] === "o") {
                o++;
            } else if (map[x][y] === "v") {
                v++;
            }

            //현재 자리에서 사방탐색
            for (let dir of dxdy) {
                let nx = x + dir[0];
                let ny = y + dir[1];

                //범위, 방문, # 확인
                if (!isIn(nx, ny) || isVisited[nx][ny] || map[nx][ny] === "#")
                    continue;

                isVisited[nx][ny] = true;
                queue.push([nx, ny]);
            }
        }
        //와일문이 끝났을때 v,o-개수비교
        if (v === 0 || o === 0) {
            return;
        } else if (o <= v) {
            totalO -= o;
        } else if (v < o) {
            totalV -= v;
        }
    };

    for (let x = 0; x < N; x++) {
        for (let y = 0; y < M; y++) {
            if (isVisited[x][y] || map[x][y] === "#" || map[x][y] === ".")
                continue;
            bfs(x, y);
        }
    }

    return totalO + " " + totalV;
}
let arr = [];
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
rl.on("line", (line) => {
    arr.push(line);
    if (arr.length - 1 === Number(arr[0].split(" ")[0])) {
        console.log(solution(arr));
        rl.close();
    }
});
