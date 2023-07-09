//달리기 경주
function solution(players, callings) {
  let ranks = {};

  /* 현재등수
          ranks={
            "mumu":1,
            "soe":2,
            ... }
        */
  for (let i = 0; i < players.length; i++) {
    ranks[players[i]] = i + 1;
  }

  callings.forEach((e) => {
    //선수들 자리이동
    //앞자리->현재자리로 현재자리->앞자리로
    let beforePlayer = players[ranks[e] - 2];
    players[ranks[e] - 2] = players[ranks[e] - 1];
    players[ranks[e] - 1] = beforePlayer;

    //등수변경
    ranks[e] -= 1;
    ranks[beforePlayer] += 1;
  });
  return players;
}
console.log(
  solution(
    ["mumu", "soe", "poe", "kai", "mine"],
    ["kai", "kai", "mine", "mine"]
  )
);
