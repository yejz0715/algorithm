// 백준 별찍기 3
const readline = require("readline");
function solution(input) {
  let n = input;
  let str = "";
  for (i = n; i >= 1; i--) {
    for (j = i; j >= 1; j--) {
      str += "*";
    }
    str += "\n";
  }
  return str;
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  console.log(solution(line));
});
