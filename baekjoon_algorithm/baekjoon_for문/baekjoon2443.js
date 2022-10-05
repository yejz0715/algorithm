// 별찍기 6 (2*n-1)

const readline = require("readline");
function solution(num) {
  let str = "";
  for (let i = 1; i <= num; i++) {
    for (let k = 1; k < i; k++) {
      str += " ";
    }
    for (let j = 2 * num - (i * 2 - 1); j > 0; j--) {
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
