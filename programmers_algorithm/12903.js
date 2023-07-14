//가운데 글자 가져오기
function solution(s) {
  let stringArr = s.split("");
  var answer = "";
  let index = Math.floor(stringArr.length / 2);

  if (stringArr.length % 2 == 0) {
    //짝
    answer = stringArr[index - 1] + stringArr[index];
  } else {
    //홀
    answer = stringArr[index];
  }
  return answer;
}
console.log(solution("qwaer"));
