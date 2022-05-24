/* 별찍기 (2*num-1)
 *
 ***
 *****
 ***
 *
 */
const readline = require("readline");
function solution(num) {
  let str = ""; //담을공간

  for (let i = 1; i <= num; i++) {
    //i=별
    str += " ".repeat(num - i) + "*".repeat(2 * i - 1) + "\n";
  }
  for (let j = num - 1; j >= 1; j--) {
    str += " ".repeat(num - j) + "*".repeat(2 * j - 1) + "\n";
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
