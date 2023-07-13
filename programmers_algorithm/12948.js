//핸드폰 번호 가리기
function solution(phone_number) {
  let answer = [];

  phone_number
    .split("")
    .reverse()
    .map((item, index) => {
      if (index <= 3) {
        answer.push(item);
      } else {
        answer.push("*");
      }
    });
  return answer.reverse().join("");
}
