//게임 맵 최단거리
function solution(maps) {
  const N = maps.length;
  const M = maps[0].length;

  //사방탐색
  const dxdy = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  //범위체크
  const isIn = (nx, ny) => 0 <= nx && 0 <= ny && nx < N && ny < M;

  //방문체크
  let isVisited = Array.from({ length: N }, () => Array(M).fill(false));

  const bfs = (x, y, cnt) => {
    //좌표를 큐에 넣기
    let queue = [[x, y, cnt]];
    isVisited[x][y] = true;

    //큐-갈수있는 경우가 있을때까지
    while (queue.length > 0) {
      const [x, y, cnt] = queue.shift(); //큐에 있는 x,y 좌표 추출

      //x,y가 범위와 같아지면 리턴
      if (x === N - 1 && y === M - 1) {
        return cnt;
      }

      //사방탐색 할 수 있는지 확인
      for (let dir of dxdy) {
        let nx = x + dir[0];
        let ny = y + dir[1];

        //범위,방문,벽인가 체크
        if (!isIn(nx, ny) || isVisited[nx][ny] || maps[nx][ny] === 0) continue;

        isVisited[nx][ny] = true;
        queue.push([nx, ny, cnt + 1]);
      }
    }
    return -1;
  };

  return bfs(0, 0, 1);
}
