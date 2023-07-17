//숫자 문자열과 영단어
function solution(s) {
  let answer = "";
  let string = "";
  let arr = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  for (let i = 0; i < s.length; i++) {
    if (Number(s[i]) + 1 > 0) {
      //숫자인지 체크
      answer += s[i];
      continue;
    }
    string += s[i];
    arr.map((item, index) => {
      if (item === string) {
        answer += index;

        string = "";
      }
    });
  }
  return BigInt(answer);
}
