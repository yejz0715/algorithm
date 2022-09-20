//사분면 고르기
const readline = require("readline");
function solution(input) {
  let answer = 0;
  let x = Number(input[0]);
  let y = Number(input[1]);
  if (x > 0 && y > 0) {
    answer += 1;
  } else if (x < 0 && y > 0) {
    answer += 2;
  } else if (x < 0 && y < 0) {
    answer += 3;
  } else {
    answer += 4;
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
