//단지번호붙히기
/*
7
0110100
0110101
1110101
0000111
0100000
0111110
0111000
 */

const readline = require("readline");

function solution(input) {
  const N = parseInt(input[0]);
  input.shift();
  const map = input.map((item) => item.split("").map(Number));

  //사방탐색
  const dxdy = [
    [1, 0],
    [-1, 0],
    [0, -1],
    [0, 1],
  ];

  //범위체크
  const isIn = (nx, ny) => 0 <= nx && 0 <= ny && nx < N && ny < N;
  //방문체크
  const isVisited = Array.from({ length: N }, () => Array(N).fill(false));

  const bfs = (x, y) => {
    //큐, 방문체크
    const queue = [[x, y]];
    isVisited[x][y] = true;

    let cnt = 1;

    //경우의 수가 없을 때까지
    while (queue.length > 0) {
      const [x, y] = queue.shift(); //큐의 좌표 추출

      //사방탐색
      for (let dir of dxdy) {
        let nx = x + dir[0];
        let ny = y + dir[1];

        //아닌것(범위, 방문x, 0인것)
        if (!isIn(nx, ny) || isVisited[nx][ny] || map[nx][ny] == 0) {
          continue;
        }

        isVisited[nx][ny] = true;
        queue.push([nx, ny]);
        cnt++;
      }
    }
    answer.push(cnt);
  };

  let answer = [];
  for (let x = 0; x < N; x++) {
    for (let y = 0; y < N; y++) {
      if (isVisited[x][y] || map[x][y] === 0) continue;
      bfs(x, y);
    }
  }

  return answer.length + "\n" + answer.sort((a, b) => a - b).join("\n");
}

let arr = [];
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on("line", (line) => {
  arr.push(line);
  if (Number(arr[0]) === arr.length - 1) {
    console.log(solution(arr));
    rl.close();
  }
});
