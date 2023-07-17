//시저암호
function solution(s, n) {
  var answer = "";
  const upperCase = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  const lowerCase = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") {
      answer += " ";
    } else {
      //대문자
      if (upperCase.includes(s[i])) {
        let index = upperCase.indexOf(s[i]);
        if (index + n <= 25) {
          answer += upperCase[index + n];
        } else {
          index = index + n - 26;
          answer += upperCase[index];
        }
      } else {
        //소문자
        let index = lowerCase.indexOf(s[i]);
        if (index + n <= 25) {
          answer += lowerCase[index + n];
        } else {
          index = index + n - 26;
          answer += lowerCase[index];
        }
      }
    }
  }
  return answer;
}
