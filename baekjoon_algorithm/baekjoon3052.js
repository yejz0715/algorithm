//나머지_input을 42로 나눈 나머지의 서로 다른 값의 개수
const readline = require("readline");
function solution(input) {
  let arr = input.map((item) => Number(item) % 42); //42로 나눈 값의 배열
  let result = {};
  let answer = 0;

  arr.forEach((x) => {
    //새로운 값이 들어오면 속성추가하고 && +1, 원래 있던 값이라면 같은 속성있으니깐 +1만 해줌,
    if (result[x]) {
      result[x] = result[x] + 1;
    } else {
      result[x] = 1;
    }
  });

  answer = Object.keys(result).length; //Object.keys(): 객체의 키 목록을 배열로 리턴
  return answer;
}

let arr = [];
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on("line", (line) => {
  arr.push(line);
  if (arr.length === 10) {
    console.log(solution(arr));
    rl.close();
  }
});
