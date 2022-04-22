// 세탁소 사장 동혁 거스름돈 계산
const readline = require("readline");
function solution(input) {
  let numArr = input;
  numArr.shift();
  let answer = [];
  let qdnp = [25, 10, 5, 1];
  for (i = 1; i <= numArr.length; i++) {
    for (j = 1; j <= qdnp.length; j++) {
      if (numArr[i] >= qdnp[j]) {
        answer += numArr[i] / qdnp[j];
        //let remain = numArr[i] % qdnp[j];
      } else if (numArr[i] < qdnp[j]) {
        j++;
      }
    }
    return answer;
  }
}

let arr = [];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  arr.push(line);
  if (arr.length - 1 == arr[0]) console.log(solution(arr));
});
