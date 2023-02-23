const inputs = require("fs")
  .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const n = +inputs.shift();
let answer = Infinity;
const map = Array.from(Array(n), () => []);

for (let i = 0; i < n; i++) {
  map[i] = inputs[i].split(" ").map(Number);
}

const getSum = (arr) => {
  let a = 0;
  let b = 0;
  const visited = Array(n + 1).fill(0);
  const arr2 = [];

  for (let i = 0; i < arr.length; i++) {
    if (!visited[arr[i]]) {
      visited[arr[i]] = 1;
    }
    for (let j = i; j < arr.length; j++) {
      a += map[arr[i] - 1][arr[j] - 1] + map[arr[j] - 1][arr[i] - 1];
    }
  }

  for (let i = 1; i < visited.length; i++) {
    if (!visited[i]) arr2.push(i);
  }

  for (let i = 0; i < arr2.length; i++) {
    for (let j = i; j < arr2.length; j++) {
      b += map[arr2[i] - 1][arr2[j] - 1] + map[arr2[j] - 1][arr2[i] - 1];
    }
  }
  return Math.abs(a - b);
};

const dfs = (i, curr, L) => {
  if (L === n / 2) {
    // sum 구하기
    const res = getSum(curr);
    if (res < answer) answer = res;
    return;
  }

  for (let j = i + 1; j < n; j++) {
    curr.push(j);
    dfs(j, curr, L + 1);
    curr.pop();
  }
};

for (let i = 1; i <= n / 2; i++) {
  dfs(i, [i], 1);
}

console.log(answer);
