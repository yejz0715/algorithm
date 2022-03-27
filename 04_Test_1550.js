const readline = require("readline");



function solution(input) { 
 var arr=[0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F',];
arr['A']=10;
arr['B']=11;
arr['C']=12;
arr['D']=13;
arr['E']=14;
arr['F']=15;
console.log(`${arr}`);
   //let result=parseInt(input,16);
    
   
   console.log(result);
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  console.log(solution(line));
});