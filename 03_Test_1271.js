const readline = require("readline");
//출력o, 백준출력x
//엄청난 부자:n(돈),m(생명체), answer1(한명당 나눠줄수있는돈),answer2(나머지)
//(1 ≤ m ≤ n ≤ 101000, m과 n은 10진수 정수)
function solution(input) { 
 
  let result=input; 
   let numArr = result.split(" "); 
   
   let n=BigInt(numArr[0]);  
   let m=BigInt(numArr[1]);
  //Number->BigInt :입력받는 수가 상당히 크다는 것을 인지하고 Number 값이 안정적으로 나타낼 수 있는 최대치보다 더 큰 정수를 표현할 수 있는 내장 객체
  
   const answer1=n/m; 
   const answer2=n%m;
  
   console.log(`${answer1}`);
   console.log(`${answer2}`);
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  console.log(solution(line));
});