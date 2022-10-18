//알람 시계
const readline = require("readline");
function solution(input) {
  let answer = "";
  let H = Number(input[0].split(" ")[0]);
  let M = Number(input[0].split(" ")[1]);
  let num = Number(input[1]);
  let quotient = 0;
  let remainder = 0;
  if (M + num < 60) {
    M = M + num;
    answer += H + " " + M;
  } else {
    quotient = Math.floor((M + num) / 60);
    remainder = (M + num) % 60;
    if (quotient + H < 24) {
      H = quotient + H;
      answer += H + " " + remainder;
    } else {
      H = quotient + H - 24;
      answer += H + " " + remainder;
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
  if (arr.length === 2) {
    console.log(solution(arr));
  }
});
