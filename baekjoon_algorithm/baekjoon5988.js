//홀수일까 짝수일까
//K (1 <= K <= 10^60): 입력받은 숫자는 자료형으로 접근 불가능한 큰 숫자라 문자열을 이용하거나 마지막 일의자리로 확인할 수 있다.
const readline = require("readline");
function solution(input) {
  let answer = "";
  let numArr = [];
  for (let i = 0; i < input.length; i++) {
    for (let j = input[i].length - 1; j >= 0; j--) {
      numArr.push(input[i][j]);
      break; //입력받은 숫자의 마지막 일의자리만 필요하기때문에
    }
  }
  numArr
    .map((num) => Number(num))
    .filter((num) => {
      num % 2 != 0 ? (answer += "odd" + "\n") : (answer += "even" + "\n");
    });

  //   answer += "even" + "\n";
  // } else {
  //   answer += "odd" + "\n";
  // }

  return answer;
}
let arr = [];
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on("line", (line) => {
  arr.push(line);

  if (Number(arr[0]) + 1 === arr.length) {
    arr.shift();
    console.log(solution(arr));
  }
});
