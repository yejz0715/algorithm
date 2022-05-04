//윤년
const readline = require("readline");
function solution(input) {
  let y = input;
  if ((y % 4 == 0 && y % 100 != 0) || y % 400 == 0) {
    console.log("1");
  } else console.log("0");
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  solution(line);
});
