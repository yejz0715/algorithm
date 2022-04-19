// 세탁소 사장 동혁 거스름돈 계산
const readline = require("readline");
function solution(input) {
  const quater = 25;
  const dime = 10;
  const nick = 5;
  const penny = 1;

  const a = input[1];
  console.log(
    `${a / quater} ${a / quater / dime} ${a / quater / dime / nick} ${
      a / quater / dime / nick / penny
    }`
  );
}
let arr = [];
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  arr.push(line);
  if (arr.length - 1 == arr[0]) solution(arr);
});
