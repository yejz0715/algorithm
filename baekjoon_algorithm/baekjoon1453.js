//피씨방 알바 사람있는 자리를 선택해서 거절당하는 사람 수 구하기
const readline = require("readline");
function solution(input) {
  let nArr = input[1].split(" "); //들어오는 손님이 앉고싶어하는 자리
  let seat = new Array(100).fill(0); //100까지의 자리의 값을 0으로 하는 배열 생성
  let same = 0; //중복값
  for (i = 0; i < nArr.length; i++) {
    //들어오는 수 만큼
    if (seat[Number(nArr[i]) - 1] === 0) {
      //100까지의 배열에서 손님이 원하는 자리가 비어있다면
      seat[Number(nArr[i]) - 1] += 1;
    } else {
      //손님이 원하는 자리에 사람이 있다면
      same += 1;
    }
  }

  return same;
}

let arr = [];
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on("line", (line) => {
  arr.push(line);
  if (arr.length === 2) {
    console.log(solution(arr));
  }
});
