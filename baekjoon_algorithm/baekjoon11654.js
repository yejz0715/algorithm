//아스키코드
//문자->아스키코드: string.charCodeAt(문자열 자릿수)
//               : string.codePointAt(문자열 자릿수)
//아스키코드->문자: String.fromCodePoint(아스키코드 번호)
const readline = require("readline");
function solution(input) {
  let answer = input.charCodeAt(0);
  return answer;
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on("line", (line) => {
  console.log(solution(line));
});
