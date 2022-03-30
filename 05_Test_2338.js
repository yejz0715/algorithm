const readline = require("readline");

//긴자리 계산 //첫째줄에 n, 둘째줄에 m 입력
function solution(input) {
  let n = input[0];
  let m = input[1];

  const answer1 = n + m;
  const answer2 = n - m;
  const answer3 = n * m;

  console.log(`${answer1}`);
  console.log(`${answer2}`);
  console.log(`${answer3}`);
}
let input = [];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  //console.log(typeof line);
  input.push(BigInt(line)); //Number->BigInt(범위때문)
  if (input.length === 2) {
    solution(input);
  }
});
