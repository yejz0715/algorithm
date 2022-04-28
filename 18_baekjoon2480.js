// 주사위 3개
const readline = require("readline");
function solution(input) {
  let one = Number(input.split(" ")[0]);
  let two = Number(input.split(" ")[1]);
  let three = Number(input.split(" ")[2]);
  let same;
  let answer;
  if (one == two && one == three && two == three) {
    // 세개의 수가 다 같을 때
    answer = one * 1000 + 10000;
    return answer;
  } else if (one == two || one == three || two == three) {
    //두개의 수가 다 같을 때
    if (one == two || one == three) {
      same = one;
    } else {
      same = two;
    }
    answer = same * 100 + 1000;
    return answer;
  } else {
    //세개의 수가 다 다른수가 나왔을 때
    answer = Math.max(one, two, three) * 100;
    return answer;
  }
}
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on("line", (line) => {
  console.log(solution(line));
});
