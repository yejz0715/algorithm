//핸드폰 번호 궁합
/*
74759336
36195974
*/
const readline = require("readline");
function solution(input) {
    let [phoneA, phoneB] = input.map((item) => item.split("").map(Number));
    let phones = "";

    //두번호 합침
    for (let i = 0; i < 8; i++) {
        phones += phoneA[i];
        phones += phoneB[i];
    }

    while (phones.length > 2) {
        let tmp = "";
        for (let i = 0; i < phones.length - 1; i++) {
            let sum = Number(phones[i]) + Number(phones[i + 1]);
            tmp += sum % 10; //일의자리만 더해줌
        }
        phones = tmp;
    }

    return phones;
}
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
let arr = [];
rl.on("line", (line) => {
    arr.push(line);
    if (arr.length === 2) {
        console.log(solution(arr));
        rl.close();
    }
});
