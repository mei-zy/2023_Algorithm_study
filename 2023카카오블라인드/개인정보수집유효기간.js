const months = {
  1: 31,
  2: 28,
  3: 31,
  4: 30,
  5: 31,
  6: 30,
  7: 31,
  8: 31,
  9: 30,
  10: 31,
  11: 30,
  12: 31,
};

const isExceedDate = (base, compare) => {
  const [byear, bmonth, bdate] = base.split(".").map(Number);
  const [cyear, cmonth, cdate] = compare.split(".").map(Number);

  if (byear > cyear) return false;
  else if (byear < cyear) return true;
  else {
    if (bmonth < cmonth) return true;
    else if (bmonth > cmonth) return false;
    else {
      if (cdate >= bdate) return true;
      else false;
    }
  }
};

const calValidity = (base, addMonth) => {
  let [year, month, date] = base.split(".").map(Number);

  month += addMonth;

  if (month > 12) {
    const x = Math.round(addMonth / 12);
    year += x;
    month -= 12 * x;

    console.log("year", year, "month", month, "x", x);
  }

  // date 줄이기
  date -= 1;

  if (date === 0) {
    if (month === 1) {
      const d = months[12];
      date = d;
      month = 12;
      year--;
    } else {
      const d = months[month--];
      date = d;
    }
  }

  return `${year}.${month}.${date}`;
};

function solution(today, terms, privacies) {
  var answer = [];

  const termChart = new Map();

  for (let term of terms) {
    const [kind, date] = term.split(" ");
    termChart.set(kind, date);
  }

  let i = 1;

  for (let privacie of privacies) {
    const [days, alpha] = privacie.split(" ");
    const date = calValidity(days, +termChart.get(alpha));
    console.log(date);

    if (isExceedDate(today, date)) answer.push(i);
    i++;
  }

  return answer;
}
