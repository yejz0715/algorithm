//도비의 영어 공부
const readline = require("readline");
function solution(input) {
  let count = 0;
  let alphabet = "";
  let answer = "";
  for (let i = 0; i < input.length; i++) {
    let string = input[i].toLowerCase(); //영어문장을 소문자로 바꾸고 비교
    for (let j = 0; j < string.length; j++) {
      alphabet = string[0]; //비교할 문자
      if (alphabet === string[j]) {
        count += 1;
      }
    }
    count -= 1; //비교할 문자도 카운트가 들어갔으니 -1
    answer += alphabet + " " + count + "\n";
    count = 0;
  }
  return answer;
}
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let arr = [];
rl.on("line", (line) => {
  arr.push(line);
  if (line === "#") {
    arr.pop();
    console.log(solution(arr));
  }
});
