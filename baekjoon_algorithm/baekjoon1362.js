//펫

function solution(arr, num) {
    let [o, w] = arr[0].split(" ").map(Number); //적정체중, 실제체중
    const scenario = arr.splice(1).map((item) => item.split(" "));

    for (let i = 0; i < scenario.length; i++) {
        if (scenario[i][0] === "F") {
            w += Number(scenario[i][1]);
        } else {
            w -= Number(scenario[i][1]);
        }
        if (w <= 0) {
            return `${num} RIP`;
        }
    }

    if (o * 0.5 < w && w < o * 2) {
        return `${num} :-)`;
    } else {
        return `${num} :-(`;
    }
}
const input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");

let arr = [];
let num = 1;
for (let i = 0; i < input.length; i++) {
    let line = input[i];
    if (line === "# 0") {
        console.log(solution(arr, num));
        arr = [];
        num++;
    } else {
        arr.push(line);
    }
}
