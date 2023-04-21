const getComb = (item) => {
  const [a, b, c, d, e] = item.split(" ");

  const comb = [
    `${a}${b}${c}${d}`,
    `-${b}${c}${d}`,
    `${a}-${c}${d}`,
    `${a}${b}-${d}`,
    `${a}${b}${c}-`,
    `--${c}${d}`,
    `-${b}-${d}`,
    `-${b}${c}-`,
    `${a}--${d}`,
    `${a}-${c}-`,
    `${a}${b}--`,
    `${a}---`,
    `-${b}--`,
    `--${c}-`,
    `---${d}`,
    `----`,
  ];

  return {
    arr: comb,
    score: +e,
  };
};
function solution(info, query) {
  var answer = [];
  let comb = new Map();

  for (let i of info) {
    const { arr, score } = getComb(i);

    for (let str of arr) {
      const target = comb.get(str);
      let cur;

      if (!target) cur = [score];
      else {
        cur = target;
        cur.push(score);
      }
      comb.set(str, cur);
    }
  }

  for (let [key, value] of comb) {
    const result = value.sort((a, b) => a - b);
    comb.set(key, result);
  }

  for (let q of query) {
    let [a, b, c, last] = q.split("and").map((item) => item.trim());
    let [d, score] = last.split(" ");

    score = +score;

    const target = `${a}${b}${c}${d}`;
    const arr = comb.get(target);

    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
      const mid = Math.floor((left + right) / 2);

      if (arr[mid] < score) left = mid + 1;
      else right = mid;
    }

    console.log(left);
  }

  return answer;
}
