//오타맨 고창영
const readline = require("readline");
function solution(input) {
  for (let i = 0; i < input.length; i++) {
    let a = input[i][0];
    for (let j = 0; input[i].length; j++) {}
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

  if (arr.length - 1 === Number(arr[0])) {
    arr.shift();
    console.log(solution(arr));
  }
});
