//크로아티아 알파벳(크로아티아포함 몇개의 알파벳으로 이루어져있는지..)
const readline = require("readline");
const solution = (input) => {
  let regex = input.replace(/(c=|c-|dz=|d-|lj|nj|s=|z=)/g, "*");
  // 단어중 하나일 때 정규표현식 단어사이에 다자택일 연사자(|)를 포함한다
  // /[agc]/g : 한글자씩 모두 찾을때
  // /(단어|단어|단어)/g : 단어 모두를 찾을때
  let answer = regex.split("");
  return answer.length;
};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  console.log(solution(line));
});
