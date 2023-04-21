function binarySearch(arr, score) {
  // 쿼리 결과가 없을 경우 예외 처리
  if (!arr) return 0;
  let left = 0;
  let right = arr.length;
  while (left < right) {
    // let mid = left + Math.floor((right - left) / 2);
    let mid = Math.floor((left + right) / 2);
    // ! 초과로 구할 경우의 수식.
    // ! 조건문으로 미만과 초과를 구분할 수 있다.
    // if (arr[mid] > score) right = mid;
    // else left = mid + 1;
    if (arr[mid] >= score) right = mid;
    else left = mid + 1;
  }
  // console.log(arr, score, left, right);
  return arr.length - left;
}

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

    if (!arr) {
      answer.push(0);
      continue;
    }

    let left = 0;
    let right = arr.length;

    while (left < right) {
      let mid = Math.floor((left + right) / 2);

      if (arr[mid] < score) left = mid + 1;
      else right = mid;
    }

    answer.push(arr.length - left);
    // console.log(arr,score,mid, left,right)
  }

  return answer;
}
