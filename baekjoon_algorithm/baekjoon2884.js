// 알람시계

const readline = require("readline");
function solution(input) {
  let answer = "";
  let h = Number(input.split(" ")[0]);
  let m = Number(input.split(" ")[1]);
  if (m >= 45) {
    m = m - 45;
    answer = h + " " + m;
  } else {
    h = h - 1;
    m = m + 60 - 45;
    if (h < 0) {
      answer = 23 + " " + m;
    } else {
      answer = h + " " + m;
    }
  }
  return answer;
}
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on("line", (line) => {
  console.log(solution(line));
});
