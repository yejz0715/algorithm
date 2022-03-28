const readline = require("readline");

//세수정렬 sort() : 배열 안의 원소를 정렬하는 함수(오름차순)
function solution(input) { 
    let result=input; 
    let numArr = result.split(' '); 
    
    let a=Number(numArr[0]);  
    let b=Number(numArr[1]);
    let c=Number(numArr[2]);
   
    var arr=[a,b,c];
         
    console.log(`${arr.sort()}`);
     
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  console.log(solution(line));
});
