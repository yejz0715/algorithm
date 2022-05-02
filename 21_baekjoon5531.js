// 방학숙제
const readline = require("readline");
function solution(input) {
  let vacation = Number(input[0]);
  let koreanTotalPage = Number(input[1]);
  let mathTotalPage = Number(input[2]);
  let koreanPage = Number(input[3]);
  let mathPage = Number(input[4]);
  let answer = 0;
  answer = vacation - Math.max(Math.ceil(koreanTotalPage / koreanPage), Math.ceil(mathTotalPage / mathPage));

  return answer;
}
let arr = [];
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on("line", (line) => {
  arr.push(line);
  if (arr.length == 5) {
    console.log(solution(arr));
  }
});
