function solution(maps) {
  var answer = -1;

  const [n, m] = [maps.length, maps[0].length];
  const [dx, dy] = [
    [0, -1, 0, 1],
    [-1, 0, 1, 0],
  ];

  let q = [];
  const visited = Array.from(Array(n), () => Array(m).fill(0));

  q = [[0, 0]];
  visited[0][0] = 1;
  let L = 0;

  while (q.length) {
    const len = q.length;

    for (let i = 0; i < len; i++) {
      const [x, y] = q.shift();

      if (x + 1 === n && y + 1 === m) {
        return L + 1;
      }
      for (let j = 0; j < 4; j++) {
        const [tx, ty] = [x + dx[j], y + dy[j]];

        if (
          tx >= 0 &&
          tx < n &&
          ty >= 0 &&
          ty < m &&
          !visited[tx][ty] &&
          maps[tx][ty]
        ) {
          q.push([tx, ty]);
          visited[tx][ty] = 1;
        }
      }
    }
    L++;
  }

  return answer;
}

console.log(
  solution([
    [1, 0, 1, 1, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 0, 1],
    [0, 0, 0, 0, 1],
  ])
);

//11
