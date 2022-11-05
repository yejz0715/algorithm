//와글와글 숭고한
const readline = require("readline");
function solution(input) {
  let numS = Number(input.split(" ")[0]);
  let numK = Number(input.split(" ")[1]);
  let numH = Number(input.split(" ")[2]);
  let answer = "";
  if (numS + numK + numH >= 100) {
    answer = "OK";
  } else {
    if (Math.min(numS, numK, numH) === numS) {
      answer = "Soongsil";
    } else if (Math.min(numS, numK, numH) === numK) {
      answer = "Korea";
    } else {
      answer = "Hanyang";
    }
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
