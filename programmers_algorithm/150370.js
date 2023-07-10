//개인정보 수집 유효기간
function solution(today, terms, privacies) {
  const answer = [];
  let dateBoolean = true;
  let date = "";

  //날짜
  let todayDate = today;

  //약관종류와 유효기간
  const termsObject = {};
  terms.map((item) => {
    const [termsType, termsPeriod] = item.split(" ");
    termsObject[termsType] = Number(termsPeriod);
  });

  //개인정보
  privacies.map((item, index) => {
    let addYear = 0;
    let addMonth = 0;
    let lastMoth = "";
    let lastDay = "";
    const [privaciesDate, privaciesType] = item.split(" ");
    const [privaciesYear, privaciesMonth, privaciesDay] = privaciesDate
      .split(".")
      .map((item) => Number(item));
    const termsMonth = termsObject[privaciesType]; //약관종류가 같은 유효기간

    if (termsMonth + privaciesMonth <= 12) {
      addYear = privaciesYear;
      addMonth = termsMonth + privaciesMonth;
    } else {
      if ((termsMonth + privaciesMonth) % 12 === 0) {
        addYear = Math.floor(
          privaciesYear + (termsMonth + privaciesMonth - 1) / 12
        );
        addMonth = 12;
      } else {
        addYear = Math.floor(
          privaciesYear + (termsMonth + privaciesMonth) / 12
        );
        addMonth = 12;
      }
    }

    if (addMonth.toString().length === 1) {
      lastMoth = "0" + addMonth;
    } else {
      lastMoth = addMonth;
    }
    if (privaciesDay.toString().length === 1) {
      lastDay = "0" + privaciesDay;
    } else {
      lastDay = privaciesDay;
    }

    date = addYear + "." + lastMoth + "." + lastDay;
    todayDate >= date ? (dateBoolean = true) : (dateBoolean = false); //오늘날짜와 유효기간 비교

    if (dateBoolean) {
      answer.push(index + 1);
    }
  });

  return answer;
}

console.log(solution("2021.12.08", ["A 18"], ["2020.06.08 A"]));
