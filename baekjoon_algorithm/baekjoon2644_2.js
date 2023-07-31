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
//방법2)인접행렬을 가족관계 숫자로..
const readline = require("readline");
function solution(input) {
    const N = Number(input[0]); //전체 사람수
    const [start, end] = input[1].split(" ").map(Number);
    const relation = input.splice(3).map((item) => item.split(" ").map(Number)); //가족관계를 나타내는 번호
    const isVisited = Array(N + 1).fill(false); //방문체크
    const graph = Array.from({ length: N + 1 }, () => []); //인접행렬

    //인접행렬_가족관계 번호를 그래프에 담음
    for (line of relation) {
        const [first, second] = line;
        graph[first].push(second);
        graph[second].push(first);
    }

    const dfs = (node, cnt) => {
        isVisited[node] = true;

        // 종료조건
        if (node === end) {
            answer = cnt;
        }

        //그래프에서 매개변수와 연결되어있는 관계 찾기
        for (let num of graph[node]) {
            //확인)방문체크
            if (isVisited[num]) continue;

            //재귀
            dfs(num, cnt + 1);
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
