//2606_바이러스_dfs()
/*
7
6
1 2
2 3
1 5
5 2
5 6
4 7
*/

const readline = require("readline");
function solution(input) {
    const N = parseInt(input[0]); //컴퓨터 수
    const computer = input.splice(2).map((item) => item.split(" ").map(Number));
    let isVisited = Array(N + 1).fill(false);
    let graph = Array.from({ length: N + 1 }, () => []);
    let count = 0;

    //그래프_컴퓨터 연결되는 관계
    for (let line of computer) {
        const [from, to] = line;
        graph[from].push(to);
        graph[to].push(from);
    }

    const dfs = (num) => {
        isVisited[num] = true; //방문체크
        count++;

        //연결된 컴퓨터중에서
        for (let i of graph[num]) {
            if (isVisited[i]) continue;

            //재귀
            dfs(i);
        }
        return count - 1;
    };
    return dfs(1);
}

let arr = [];
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
rl.on("line", (line) => {
    arr.push(line);
    if (arr.length - 2 === Number(arr[1])) {
        console.log(solution(arr));
        rl.close();
    }
});
