//mbti
const readline = require("readline");
function solution(input) {
  let count = 0;
  let mbti = input[0];
  input.shift();
  input.shift();
  for (let i = 0; i < input.length; i++) {
    if (mbti === input[i]) {
      count += 1;
    }
  }
  return count;
}
let arr = [];
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on("line", (line) => {
  arr.push(line);
  if (Number(arr[1]) === arr.length - 2) console.log(solution(arr));
});
