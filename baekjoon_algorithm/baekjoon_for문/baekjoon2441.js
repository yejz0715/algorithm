// 백준 별찍기 4
const readline = require("readline");
function solution(input) {
  let answer = "";

  for (let i = 0; i < input; i++) {
    for (let j = 0; j < i; j++) {
      answer += " ";
    }
    for (let o = input; o > i; o--) {
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
