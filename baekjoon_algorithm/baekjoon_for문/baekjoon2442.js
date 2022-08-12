// 별찍기 5 (2*n-1)

const readline = require("readline");
function solution(num) {
  let str = "";
  for (i = 1; i <= num; i++) {
    for (let a = num - i; a >= 1; a--) {
      str += "n";
    }
    for (j = 1; j <= 2 * i - 1; j++) {
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
