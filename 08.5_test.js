//08 숫자입력해서 별찍기2(3->2->1)
const readline = require("readline");
function solution(input) {
  let answer = "";
  for (let i = input; i >= 1; i--) {
    //i는 입력한 input부터 1까지 감소
    for (let j = 1; j <= i; j++) {
      answer += "*";
    }
    answer += "\n";
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
