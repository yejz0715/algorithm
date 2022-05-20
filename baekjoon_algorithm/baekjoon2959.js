// 거북이_주어진 4개의 수로 큰 직사각형 면적 출력
//4개의 수로 최대한 큰 직사각형이어야 하는 2개의 조건에 맞게 만들려면
//수들중 작은수 두개를 선택하면 작은 사각형이 나와서-> 1,3번째를 선택
//수를 정렬해서 가로중에서 작은수*세로중에서 작은수
const readline = require("readline");
function solution(input) {
  let sort = input.split(" ").sort((a, b) => a - b); //정렬

  let answer = Number(sort[0]) * Number(sort[2]); //가로에서 가장 작은수 * 세로에서 가장 작은수
  return answer;
}
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on("line", (line) => {
  console.log(solution(line));
});
