const inputs = require("fs")
  .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

let answer = "";
const [n, m] = inputs.shift().split(" ").map(Number);
const graph = Array.from(Array(1), () => Array(m + 2).fill(0));

for (let i = 0; i < n; i++) {
  const arr = inputs.shift().split(" ").map(Number);
  graph.push([0, ...arr, 0]);
}

const zero = Array(m + 2).fill(0);
graph.push(zero);

const sum = [...graph];

for (let i = 1; i < n + 1; i++) {
  for (let j = 1; j < m + 1; j++) {
    const current =
      graph[i][j] + sum[i - 1][j] + sum[i][j - 1] - sum[i - 1][j - 1];
    sum[i][j] = current;
  }
}

const k = +inputs.shift();

for (let i = 0; i < k; i++) {
  const [i, j, x, y] = inputs.shift().split(" ").map(Number);

  // const [x1, y1, x2, y2] = inputs[i].split(" ").map(Number);

  const current = sum[x][y] - sum[i - 1][y] - sum[x][j - 1] + sum[i - 1][j - 1];

  answer += String(current) + "\n";
}

console.log(answer);

// const sum = [...graph];

// for (let i = 1; i < n + 1; i++) {
//   for (let j = 1; j < m + 1; j++) {
//     if (j === 1) {
//       sum[i][j] = sum[i - 1][m] + graph[i][j];
//     } else {
//       sum[i][j] = sum[i][j - 1] + graph[i][j];
//     }
//   }
// }

// const k = +inputs.shift();

// for (let i = 0; i < k; i++) {
//   let result;

//   if (j === 1) {
//     result = sum[x][y] - sum[i - 1][m];
//   } else {
//     result = sum[x][y] - sum[i][j - 1];
//   }
//   console.log(result);
// }
