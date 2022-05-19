// 커맨드 AABBABB _조건에 맞았다면 1 아니면 0 출력
/* 
1
AABBABB
*/
const readline = require("readline");
function solution(input) {
  for (i = 1; i < input.length; i++) {
    let text = input[i];
    let first = text.split("")[0];
    let last = text.split("")[text.length - 1];
    //변수를 받아서 정규표현식 사용
    let testExp = new RegExp( //조건3
      first + "{2}" + last + "{2}" + first + "{1}" + last + "{2}"
    );
    if (text.length === 7 && first != last) {
      //조건1,2
      testExp.test(text) ? console.log(1) : console.log(0);
    } else console.log(0);
  }
}
let arr = [];
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on("line", (line) => {
  arr.push(line);
  if (Number(arr[0]) === arr.length - 1) {
    solution(arr);
  }
});
