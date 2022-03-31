const readline = require("readline");

//16진수->10진수( 최대 길이는 6글자, 음수x)
function solution(input) {
  //let input={length:5};
  let result = input.split(" ");
  let result2 = parseInt(result, 16);
  //parseInt:문자열을 정수로 반환(문자열string,사용할진법16(16진수->10진수))

  console.log(result2);
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  solution(line);
  //console.log( solution(line));  //undifined - 출력방법이 잘못되었음
});
