const inputs = require("fs")
  .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n")[0]
  .toUpperCase();

let answer = 0;

const [x, n] = inputs.split(" ").map((item) => +item);
const visited = new Array(1000000).fill(false);
const q = [x];
visited[x] = true;
let flag = false;

while (q.length) {
  if (flag) break;
  const len = q.length;

  for (let i = 0; i < len; i++) {
    const value = q.shift();
    if (value === n) {
      flag = true;
      break;
    }
    for (let visit of [value - 1, value + 1, 2 * value]) {
      if (visit > 0 && visit < 1000000 && !visited[visit]) {
        q.push(visit);
        visited[visit] = true;
      }
    }
  }
  answer++;
}

if (n === x) console.log(0);
else console.log(answer - 1);
