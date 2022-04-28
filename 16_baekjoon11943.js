// 파일 옮기기 최소횟수 구하기
const readline = require("readline");
function solution(input) {
  let firstApple = Number(input[0].split(" ")[0]);
  let firstOrange = Number(input[0].split(" ")[1]);
  let secondApple = Number(input[1].split(" ")[0]);
  let secondOrange = Number(input[1].split(" ")[1]);

  if (firstApple + secondOrange < secondApple + firstOrange) {
    console.log(firstApple + secondOrange);
  } else {
    console.log(secondApple + firstOrange);
  }
}
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let arr = [];
rl.on("line", (line) => {
  arr.push(line);
  if (arr.length == 2) {
    solution(arr);
  }
});
