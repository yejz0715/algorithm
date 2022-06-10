//버그왕
const input = require("fs")
  .readFileSync("./baekjoon3447.txt")
  .toString()
  .split("\n");
console.log(solution(input));
function solution(input) {
  let answer = ""; //마지막에 담아서 출력할 변수
  let line = "";
  for (let i = 0; i < input.length; i++) {
    line = input[i];
    while (line.includes("BUG")) {
      //while문으로 BUG가 없을때까지 계속 돌림
      line = line.replaceAll("BUG", "");
    }
    answer += line + "\n";
  }

  return answer;
}
