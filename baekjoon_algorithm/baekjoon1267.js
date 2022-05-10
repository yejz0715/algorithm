//핸드폰 요금_저렴한 요금제 선택하기
const readline = require("readline");
function solution(input) {
  let time = input[1].split(" ");
  let yTotal = 0; //영식-30초마다 10원 29초-10원, 30초-20원
  let mTotal = 0; //민식-60초마다 15원 59초-15원, 60초-30원

  //삼항연산자사용
  for (let i = 0; i < time.length; i++) {
    yTotal +=
      time[i] % 30 === 0
        ? Number(time[i] / 30 + 1) * 10
        : Math.ceil(Number(time[i]) / 30) * 10;
    mTotal +=
      time[i] % 60 === 0
        ? Number(time[i] / 60 + 1) * 15
        : Math.ceil(Number(time[i]) / 60) * 15;
  }
  if (yTotal === mTotal) {
    return "Y " + "M " + mTotal;
  } else if (yTotal < mTotal) {
    return "Y " + yTotal;
  } else {
    return "M " + mTotal;
  }
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
