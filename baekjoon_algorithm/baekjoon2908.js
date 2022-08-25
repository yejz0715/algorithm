//상수
const readline = require("readline");
function solution(input) {
  //split(""):하나씩 쪼개서 배열에 담고
  //reverse():배열을 순서 반대로(거꾸로) 정렬
  //join(""):배열->문자열
  let first = Number(input.split(" ")[0].split("").reverse().join(""));
  let second = Number(input.split(" ")[1].split("").reverse().join(""));
  return Math.max(first, second);
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on("line", (line) => {
  console.log(solution(line));
});
