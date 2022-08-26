// 창영이의 일기장
/*
zepelepenapa papapripikapa
bapas jepe doposapadnapa opovapa kepemipijapa 
*/
const readline = require("readline");
function solution(input) {
  let answer = input
    .toString()
    .replaceAll("apa", "a")
    .replaceAll("epe", "e")
    .replaceAll("ipi", "i")
    .replaceAll("opo", "o")
    .replaceAll("upu", "u");
  console.log(answer);
}
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on("line", (line) => {
  return solution(line);
});
