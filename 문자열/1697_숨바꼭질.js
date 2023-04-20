const inputs = require("fs")
  .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n")[0]
  .toUpperCase();

const [x, n] = inputs.split(" ").map((item) => +item);
const visited = new Array(1000000).fill(false);

const bfs = () => {
  let level = 0;

  const q = [x];
  visited[x] = true;

  if (x === n) return 0;

  while (q.length) {
    const len = q.length;

    for (let i = 0; i < len; i++) {
      const t = q.shift();
      if (t === n) return level;

      for (let nx of [t - 1, t + 1, t * 2]) {
        if (nx >= 0 && nx <= 1000000 && !visited[nx]) {
          q.push(nx);
        }
      }
    }
    level++;
  }
};

const result = bfs();
console.log(result);
