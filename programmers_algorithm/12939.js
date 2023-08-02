//12939_최댓값과 최솟값
function solution(s) {
    let items = s.split(" ").sort((a, b) => Number(a) - Number(b));
    let answer = items[0] + " " + items[items.length - 1];
    return answer;
}
