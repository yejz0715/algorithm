//연속구간
const readline = require("readline");

function solution(input) {
  let answer = "";
  let line = [];
  let num = 0;
  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input[i].length; j++) {
      if (input[i][j] === input[i][j + 1]) {
        num += 1;
      } else {
        num = 0;
      }
      line.push(num);
    }
    let max = Math.max.apply(null, line);
    max += 1;

    answer += max + "\n";
    line = [];
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
  if (arr.length === 3) {
    console.log(solution(arr));
  }
});
