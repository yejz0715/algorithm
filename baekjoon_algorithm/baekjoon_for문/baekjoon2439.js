// 백준 별찍기 2
const readline = require("readline");
function solution(input) {
  let str = "";
  let answer = "";
  let n = Number(input);
  for (i = 1; i <= n; i++) {
    str = " ".repeat(n - i);
    for (j = 1; j <= i; j++) {
      str += "*";
    }
    answer += str + "\n";
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
