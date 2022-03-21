const readline = require("readline");

//a-b : 3 2 =1
function solution(input) { 
   let result=input; 
   let numArr = result.split(" "); 
   const a=Number(numArr[0])  
   const b=Number(numArr[1])
    answer=a-b; 
    //console.log(answer);
    return answer;
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  console.log(solution(line));
});