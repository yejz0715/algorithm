//완주하지 못한 선수
function solution(participant, completion) {
  //배열 정렬
  participant = participant.sort();
  completion = completion.sort();

  //index로 같은 값인지 확인
  for (let i = 0; i < participant.length; i++) {
    if (participant[i] !== completion[i]) {
      return participant[i];
    }
  }
}
