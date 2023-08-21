//베스트셀러
/*
5
kimtop
top
top
top
top
*/

const readline = require("readline");
function solution(input) {
    let answer = "";
    let maxNum = 0;
    let obj = {};

    input.forEach((item) => {
        if (obj[item]) {
            obj[item] = obj[item] + 1;
        } else {
            obj[item] = 0 + 1;
        }
    });

    for (let [name, num] of Object.entries(obj)) {
        if (maxNum < num) {
            maxNum = num;
            answer = name;
        }
        if (maxNum === num) {
            if (answer > name) {
                answer = name;
            }
        }
    }
    return answer;
}
let arr = [];
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
rl.on("line", (line) => {
    arr.push(line);
    if (arr.length - 1 === Number(arr[0])) {
        arr.shift();
        console.log(solution(arr));
        rl.close();
    }
});
