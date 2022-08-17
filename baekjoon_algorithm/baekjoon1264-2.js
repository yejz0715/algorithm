// 모음의 개수 정규표현식 사용
/*
How are you today?
Quite well, thank you, how about yourself?
I live at number twenty four.
#
*/
const readline = require("readline");
function solution(input) {
  let num = 0;
  let answer = "";
  const message = input.map((item) => item.replace(/[aeiou]/gi, "*"));
  for (let i = 0; i < message.length; i++) {
    for (let j = 0; j < message[i].length; j++) {
      if (message[i][j] === "*") {
        num += 1;
      }
    }
    answer += num + "\n";
    num = 0;
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
  if (line === "#") {
    //한줄에 "#" 있다면 함수실행
    arr.pop();
    console.log(solution(arr));
  }
});
