const readline = require("readline");

//긴자리 계산 
function solution(input) { 
    let result=input; 
    let numArr = result.split(" "); 
    
    let n=Number(numArr[0]);  
    let m=Number(numArr[1]);
   
    const answer1=n+m;
    const answer2=n-m; 
    const answer3=n*m;
   
    console.log(`${answer1}`);
    console.log(`${answer2}`);  
    console.log(`${answer3}`); 
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  console.log(solution(line));
});
