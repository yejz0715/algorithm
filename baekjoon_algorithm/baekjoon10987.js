//모음의 개수
const readline = require("readline");
function solution(input) {
  let string = input.replace(/[aeiou]/g, "*");
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] == "*") {
      count += 1;
    }
  }
  return count;
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on("line", (line) => {
  console.log(solution(line));
});
