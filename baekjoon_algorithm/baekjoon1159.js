//농구경기 첫글자가 같은 선수 5명이상이면 첫글자 출력
const readline = require("readline");
function solution(input) {
  let firstName = []; //첫글자 배열
  let maxString = "";
  for (let i = 1; i < input.length; i++) {
    firstName.push(input[i].split("")[0]);
  }
  let object = firstName.sort().reduce((accu, curr) => {
    //reduce()이용, 중복 개수 세서 object 저장
    accu[curr] = (accu[curr] || 0) + 1;
    /* =   if(accu[curr]){  //배열에 새로운 값이 들어오면 
            accu[curr]=accu[cuur]+1; 속성추가하고 +1
            }else{             
              accu[cuur]=0+1;  새로운 값이 들어온게 아니라면 같은 속성이 있으니깐 +1 만
            }  //이렇게 중복문자 개수 세기
    */
    return accu;
  }, {}); //b:6 h:1 k:7 p:2 s:2
  for (const [key, value] of Object.entries(object)) {
    //key와 value에 접근할 수 있는 for문
    if (value >= 5) {
      maxString += key;
    }
  }
  return maxString === "" ? "PREDAJA" : maxString;
}
let arr = [];
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on("line", (line) => {
  arr.push(line);
  if (arr.length - 1 === Number(arr[0])) {
    console.log(solution(arr));
  }
});
