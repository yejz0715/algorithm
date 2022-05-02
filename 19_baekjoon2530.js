// 인공지능 시계_요리시간(초)을 현재시간에 더해준다
const readline = require("readline");
function solution(input) {
  let hour = Number(input[0].split(" ")[0]);
  let minute = Number(input[0].split(" ")[1]);
  let second = Number(input[0].split(" ")[2]);
  let cookingTime = Number(input[1]);
  let answer = 0;
  let remain = 0;
  let share = 0;
  let cookingTimeShare = 0; //요리시간을 나눈 몫

  if (0 <= cookingTime && cookingTime <= 500000) {
    cookingTimeShare = Math.floor(cookingTime / 60);
    remain = Math.floor(cookingTime % 60);
    if (0 <= second && second <= 59 && second + remain < 60) {
      //(현재 초+요리시간을 나눈 나머지)
      second += remain;
    } else {
      //(현재 초+요리시간을 나눈 나머지)를 share(분)과 remain(초)로 나눔
      share = Math.floor((second + remain) / 60);
      remain = Math.floor((second + remain) % 60);
      second = remain;
      minute += share; //현재 분에 위에 계산한 share(분)를 더함
    }
    if (0 <= minute && minute <= 59 && minute + cookingTimeShare < 60) {
      //minute는 (현재 분+초를 계산하고 넘어온 분)
      minute += cookingTimeShare; //minute에 요리시간을 나눈 몫을 더해준다
    } else {
      //계산된 분(minute+요리시간을 나눈 몫)을 share(시)과 remain(분)로 나눔
      share = Math.floor((minute + cookingTimeShare) / 60);
      remain = Math.floor((minute + cookingTimeShare) % 60);
      minute = remain;
      hour += share;
    }
    if (0 <= hour && hour <= 23) {
      answer = hour + " " + minute + " " + second;
    } else {
      hour = Math.floor(hour % 24);
      answer = hour + " " + minute + " " + second;
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
  if (arr.length == 2) {
    console.log(solution(arr));
  }
});
