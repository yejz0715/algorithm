//분산처리 (a의b승 의 일의자리 구하기)
//a < 100, 1 ≤ b < 1,000,000) a 와 b가 큰 숫자라면 계산할 수 없으므로
//a와b를 곱해주면서 10으로 나눠주면 된다(일의자리만 구하면 되므로 10이 넘을때마다 10으로 나눈다)
//1-1/2-2....10-10,11-1,12-2....
//예외처리)10은 0이 아니라 10
const readline = require("readline");
const solution = (input) => {
  const answer = input.map((item) => {
    const [a, b] = item.split(" ");

    let power = 1;

    for (let i = 1; i <= b; i++) {
      power = (power * a) % 10; //일의자리/ 일의자리만 구하면 되므로 10이 넘을때마다 10으로 나눈다
    }
    return power === 0 ? 10 : power; //예외처리)10은 0이 아니라 10
  });
  console.log(answer.join("\n"));
};
let arr = [];
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  arr.push(line);
  if (arr.length - 1 === Number(arr[0])) {
    arr.shift();
    return solution(arr);
  }
});
