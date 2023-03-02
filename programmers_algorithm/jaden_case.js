//JadenCase 문자열 만들기
function solution(s) {
  let chars = s
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

  return chars;
}

console.log(solution("3people unFollowed me 3peopleunfollowedme"));
