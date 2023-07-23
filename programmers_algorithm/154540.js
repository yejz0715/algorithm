//무인도 여행_bfs()
function solution(maps) {
  const N = maps.length; //전체범위
  const M = maps[0].length;

  //사방탐색
  const dxdy = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];
  const island = maps.map((line) => line.split(""));
  const isVisited = Array.from({ length: N }, () => Array(M).fill(false)); //방문여부 체크
  const isIn = (nx, ny) => 0 <= nx && 0 <= ny && nx < N && ny < M; //범위 내에 있는지 체크

  const bfs = (startX, startY) => {
    const queue = [[startX, startY]]; //배열형식
    isVisited[startX][startY] = true; //방문
    let totalSum = parseInt(island[startX][startY]); //칸에 적힌 숫자

    while (queue.length > 0) {
      //이어진 섬이 없을때까지 (큐가 비어있을때까지 )
      const [x, y] = queue.shift(); //큐에서 x,y추출

      //사방탐색을 해서 갈수있는 범위를 체크
      for (let dir of dxdy) {
        let nx = x + dir[0];
        let ny = y + dir[1];

        //부정부터 체크(범위, 방문여부, X인지)
        if (!isIn(nx, ny) || isVisited[nx][ny] || island[nx][ny] === "X") {
          continue;
        }
        totalSum += parseInt(island[nx][ny]); //합
        isVisited[nx][ny] = true;
        queue.push([nx, ny]);
      }
    }
    return totalSum;
  };

  const answer = [];

  //범위 설정(이중포문으로 전체 돈다)
  for (let x = 0; x < N; x++) {
    for (let y = 0; y < M; y++) {
      if (island[x][y] === "X" || isVisited[x][y]) continue;
      answer.push(bfs(x, y));
    }
  }

  return answer.length === 0 ? [-1] : answer.sort((a, b) => a - b);
}
