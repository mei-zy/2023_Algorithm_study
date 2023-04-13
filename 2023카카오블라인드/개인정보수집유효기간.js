const MAX = 28;

// true면 파기
const checkDestruction = (base, compare) => {
  const [by, bm, bd] = base.split(".").map(Number);
  const [cy, cm, cd] = compare.split(".").map(Number);

  if (by < cy) return false;
  else if (by === cy) {
    if (cm === bm) {
      // date 확인
      if (bd <= cd) return false;
    } else if (bm < cm) return false;
  }

  return true;
};

const calDestruction = (dateStr, ex) => {
  let [year, month, date] = dateStr.split(".").map(Number);

  month += ex;
  date -= 1;

  // 달을 빼준다
  if (date === 0) {
    month -= 1;
    date = MAX;
  }

  if (month > 12) {
    const add = Math.floor(month / 12);
    month -= add * 12;
    year += add;
  }
  if (month === 0) {
    month = 12;
    year -= 1;
  }

  return `${year}.${month}.${date}`;
};

function solution(today, terms, privacies) {
  var answer = [];
  const des = new Map();

  for (let term of terms) {
    const [alpha, ex] = term.split(" ");
    des.set(alpha, +ex);
  }

  let index = 1;

  for (let privacie of privacies) {
    const [date, alpha] = privacie.split(" ");
    const base = calDestruction(date, des.get(alpha));
    if (checkDestruction(today, base)) answer.push(index);
    index++;
  }

  return answer;
}

// console.log(
//   solution(
//     "2022.05.19",
//     ["A 6", "B 12", "C 3"],
//     ["2021.05.02 A", "2021.07.01 B", "2022.02.19 C", "2022.02.20 C"]
//   )
// );

console.log(
  solution(
    "2020.01.01",
    ["Z 3", "D 5"],
    [
      "2019.01.01 D",
      "2019.11.15 Z",
      "2019.08.02 D",
      "2019.07.01 D",
      "2018.12.28 Z",
    ]
  )
);
