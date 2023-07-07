//create JadenCase strings_JadenCase 문자열 만들기
function solution(s) {
  let answer = s
    .split(" ")
    .map((item) =>
      item
        .split("")
        .map((item, index) =>
          index === 0 ? item.toUpperCase() : item.toLowerCase()
        )
        .join("")
    )
    .join(" ");

  return answer;
}
