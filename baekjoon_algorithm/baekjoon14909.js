//양수 개수 세기
const readline = require("readline");
const solution = (input) => {
  let numArr = input.split(" ").filter((item) => Number(item) > 0); //filter-조건
  return numArr.length;
};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  console.log(solution(line));
});
