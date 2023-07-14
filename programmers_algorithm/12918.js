//문자열 다루기 기본_정규표현식 사용
function solution(s) {
  let answer = true;
  const regex = /^[0-9]{4}$|^[0-9]{6}$/g;
  answer = regex.test(s) ? true : false;
  return answer;
}
