//추억점수
function solution(name, yearning, photo) {
  var answer = [];

  photo.map((items) => {
    let sum = 0;
    items.map((item) => {
      name.map((nameItem, nameIndex) => {
        if (item === nameItem) {
          sum += yearning[nameIndex];
        }
      });
    });
    answer.push(sum);
  });
  return answer;
}
