//입력한 숫자 별찍기
const readline = require("readline");
function solution(input) {
  let answer = ""; //String형 변수 생성
  for (let i = 1; i <= input; i++) {
    //i:행
    for (let j = 1; j <= i; j++) {
      //j:별 갯수
      answer += "*"; //answer=answer+"*"
    }
    answer += "\n";
  }
  return answer;
}
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  console.log(solution(line));
});
