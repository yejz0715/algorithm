//버그왕
const input = require("fs")
  .readFileSync("./baekjoon3447.txt")
  .toString()
  .split("\n");
console.log(solution(input));
function solution(input) {
  let answer = [];
  for (let i = 0; i < input.length; i++) {
    answer += input[i].replaceAll("BUG", "") + "\n";
  }

  return answer;
}
