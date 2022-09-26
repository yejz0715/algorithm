//두 수 비교하기
const readline = require("readline");
function solution(input) {
  let answer = "";
  let num = input.split(" ").map((item) => Number(item));
  if (num[0] < num[1]) {
    answer += "<";
  } else if (num[0] > num[1]) {
    answer += ">";
  } else {
    answer += "==";
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
