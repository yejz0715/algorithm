//바닥장식
/*
6 9
-||--||--
--||--||-
|--||--||
||--||--|
-||--||--
--||--||-
*/
const readline = require("readline");
function solution(input) {
  const [N, M] = input[0].split(" ").map(Number); //방 크기
  const room = input.splice(1).map((line) => line.split("")); //바닥장식모
  const isVisited = Array.from({ length: N }, () => Array(M).fill(false)); //방문체크

  const dfs = (x, y) => {
    isVisited[x][y] = true; //방문 함

    //종료조건-범위
    if (x === N || y === M) {
      return;
    }

    //'-'면 y+1 , '|'면 x+1
    if (room[x][y] === "-") {
      if (y + 1 < M && room[x][y + 1] === "-") {
        //y+1이 M보다 클 수 있기 때문에 범위지정해야함
        dfs(x, y + 1);
      }
    }
    if (room[x][y] === "|") {
      if (x + 1 < N && room[x + 1][y] === "|") {
        dfs(x + 1, y);
      }
    }
  };
  let answer = 0;
  for (let x = 0; x < N; x++) {
    for (let y = 0; y < M; y++) {
      if (isVisited[x][y]) continue;
      dfs(x, y);
      answer++;
    }
  }
  return answer;
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
  }
});
