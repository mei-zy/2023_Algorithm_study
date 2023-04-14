const getBinary = (n) => {
  let answer = "";
  let tmp = n;

  while (tmp !== 1 && tmp !== 0) {
    const x = tmp % 2;

    answer = `${x}${answer}`;
    tmp = Math.floor(tmp / 2);
  }

  if (tmp === 1) answer = `1${answer}`;

  return answer;
};

const check = (base, compare) => {
  let count = 0;
  let baselen = base.length;
  let comparelen = compare.length;

  let bs = base;
  let cm = compare;

  if (baselen > comparelen) {
    const target = "0".repeat(baselen - comparelen);
    console.log("target", target);

    cm = `${target}${cm}`;
  } else if (comparelen > baselen) {
    const target = "0".repeat(comparelen - baselen);
    bs = `${target}${bs}`;
  }

  for (let i = 0; i < bs.length; i++) {
    if (count > 3) break;
    const b = bs[i];
    const c = cm[i];

    if (b !== c) count++;
  }

  return count > 2 ? false : true;
};

function solution(numbers) {
  var answer = [];

  const n = getBinary(7);

  for (let number of numbers) {
    let cur = getBinary(number);
    for (let i = 1; i < 100000 - number; i++) {
      const compare = getBinary(number + i);
      const flag = check(cur, compare);

      if (flag) {
        answer.push(number + i);
        break;
      }
    }
  }

  return answer;
}
