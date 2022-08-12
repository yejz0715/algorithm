// 모음의 개수
/*
How are you today?
Quite well, thank you, how about yourself?
I live at number twenty four.
#
*/
const readline = require("readline");
function solution(input) {
  let sum = 0;
  let message = input.map((item) => item.split(""));
  for (let i = 0; i < message.length; i++) {
    for (let j = 0; j < message[i].length; j++) {
      if (message[i][j] === "A" || message[i][j] === "a") {
        sum += 1;
      } else if (message[i][j] === "E" || message[i][j] === "e") {
        sum += 1;
      } else if (message[i][j] === "I" || message[i][j] === "i") {
        sum += 1;
      } else if (message[i][j] === "O" || message[i][j] === "o") {
        sum += 1;
      } else if (message[i][j] === "U" || message[i][j] === "u") {
        sum += 1;
      }
    }
    console.log(sum);
    sum = 0;
  }
}
let arr = [];
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on("line", (line) => {
  arr.push(line);
  if (line === "#") {
    //한줄에 "#" 있다면 함수실행
    arr.pop();
    return solution(arr);
  }
});
