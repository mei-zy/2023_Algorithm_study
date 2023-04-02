const solution = (arr) => {
  let answer = 0;
  let count = [0];
  let map = new Map();

  arr.unshift(0);

  for (let i = 1; i < arr.length; i++) {
    const x = arr[i] + count[i - 1];
    count.push(x);
  }

  for (let i = 0; i < count.length; i++) {
    const x = map.get(count[i]);

    if (x) {
      answer += x;
    }

    map.set(count[i], x ? x + 1 : 1);
  }

  return answer;
};

console.log(solution([5, -5, 6, 0, 2, -8])); //4
console.log(solution([-5, 3, 0, -3, 10])); //2
