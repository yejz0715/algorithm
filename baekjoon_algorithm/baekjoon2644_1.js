//2644_촌수계산하기_dfs()
/*
9
7 3
7
1 2
1 3
2 7
2 8
2 9
4 5
4 6
*/

//방법1)_(graph)인접행렬을 boolean으로..
const readline = require("readline");
function solution(input) {
    const N = Number(input[0]); //전체 사람수
    const [start, end] = input[1].split(" ").map(Number);
    const relation = input.splice(3).map((item) => item.split(" ").map(Number)); //가족관계를 나타내는 번호
    const isVisited = Array(N + 1).fill(false); //방문체크
    const graph = Array.from({ length: N + 1 }, () => Array(N + 1).fill(false)); //인접행렬

    //인접행렬_가족관계 번호가 있는건 true로 변경
    for (let line of relation) {
        graph[line[0]][line[1]] = true;
        graph[line[1]][line[0]] = true;
    }

    const dfs = (node, cnt) => {
        isVisited[node] = true;

        // 종료조건
        if (node === end) {
            answer = cnt;
        }

        //매개변수의 그래프를 전체를 돌면서 확인
        for (let i = 1; i <= N; i++) {
            //확인)방문했거나 아니거나
            if (!graph[node][i]) continue;
            if (isVisited[i]) continue;

            //재귀
            dfs(i, cnt + 1);
        }
    };
    let answer;
    dfs(start, 0);

    return answer === undefined ? -1 : answer;
}

let arr = [];
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
rl.on("line", (line) => {
    arr.push(line);
    if (arr.length - 3 === Number(arr[2])) {
        console.log(solution(arr));
        rl.close();
    }
});
