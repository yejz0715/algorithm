//자기복제수
const readline = require("readline");
function solution(input) {
  let answer = "";

  for (let i = 0; i < input.length; i++) {
    let square = Math.pow(Number(input[i]), 2); //제곱
    let string = square.toString().slice(-input[i].length, square.length); //square의 뒷자리, input[i] 글자수만큼 리턴
    //마지막 2글자 리턴하려면 str.slice(-2, str.length)

    if (string === input[i]) {
      answer += "YES";
    } else {
      answer += "NO";
    }
    answer += "\n";
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
  if (arr.length === Number(arr[0]) + 1) {
    arr.shift();
    console.log(solution(arr));
  }
});
