//피카츄 pi,ka,chu 로만 되어있는 문자 찾기 (정규표현식 사용)
//pi,ka,chu를 '_'로 바꾸고 '_' 제외한 다른 문자가 있다면 no, 없다면 yes 출력
const readline = require("readline");
function solution(input) {
  let msg = input;
  let regEx = /[^_]/g;
  if (msg.includes("pi")) {
    msg = msg.replace(/pi/g, "_");
  }
  if (msg.includes("ka")) {
    msg = msg.replace(/ka/g, "_");
  }
  if (msg.includes("chu")) {
    msg = msg.replace(/chu/g, "_");
  }
  return regEx.test(msg) ? "NO" : "YES";
}
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on("line", (line) => {
  console.log(solution(line));
});
