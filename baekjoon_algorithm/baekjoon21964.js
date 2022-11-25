//선린인터넷고등학교 교가_마지막 다섯글자 출력
const readline = require("readline");
function solution(input) {
  let answer = input[0].slice(-5, input[0].length);
  return answer;
}
let arr = [];
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on("line", (line) => {
  arr.push(line);
  if (arr.length === 2) {
    arr.shift();
    console.log(solution(arr));
  }
});
