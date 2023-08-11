//x만큼 간격이 있는 n개의 숫자
function solution(x, n) {
    let answer = [];
    let num = 0;

    while (answer.length !== n) {
        num += x;
        answer.push(num);
    }
    return answer;
}
