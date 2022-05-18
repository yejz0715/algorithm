//피보나치 함수
const readline = require("readline");

function fibonacci(num) {
  // 이전에 구한 값을 fibo배열에 저장
  let fibo = [];

  // 우리가 알고 있는 사실 n0 = 0, n1 = 1
  fibo[0] = 0;
  fibo[1] = 1;

  // 0번째와 1번째는 우리가 알고 있으니 2번부터 시작 - 구하려는 수까지 for문 작동
  for (let i = 2; i <= num; i++) {
    fibo[i] = fibo[i - 1] + fibo[i - 2];
  }

  // 해당 값 리턴 - 어떤 값을 리턴해줘야 할지 생각해보기
  return fibo[num];
}

function solution(input) {
  let num = Number(input);
  return fibonacci(num);
}
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on("line", (line) => {
  console.log(solution(line));
});
