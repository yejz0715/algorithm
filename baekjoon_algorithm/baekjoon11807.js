//개수세기
const readline = require("readline");
function solution(input) {
  let num = Number(input[1]);
  let arr = input[0]
    .split(" ")
    .map((item) => Number(item))
    .filter((item) => num === item);

  return arr.length;
}

let arr = [];
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on("line", (line) => {
  arr.push(line);
  if (arr.length === 3) {
    arr.shift();
    console.log(solution(arr));
    rl.close();
  }
});
