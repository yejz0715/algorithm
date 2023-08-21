//모르고리즘 화장님 추천받습니다
/*
3
inseop 10
gukryeol 1
juno 11
 */
const readline = require("readline");

function solution(input) {
    let maxScore = Number.MIN_SAFE_INTEGER;
    let scoreName = "";
    input.forEach((item) => {
        let [name, score] = item.split(" ");
        score = Number(score);
        if (maxScore < score) {
            maxScore = score;
            scoreName = name;
        }
        if (maxScore === score) {
            if (scoreName > name) {
                scoreName = name;
            }
        }
    });

    return scoreName;
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
