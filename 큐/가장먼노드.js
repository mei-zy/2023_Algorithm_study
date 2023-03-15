function solution(n, edge) {
  var answer = 0;

  const graph = Array.from(Array(n + 1), () => []);
  const visited = new Array(n + 1).fill(Infinity);

  for (let [to, from] of edge) {
    graph[to].push(from);
    graph[from].push(to);
  }

  const q = [1];
  visited[1] = 0;

  while (q.length) {
    const x = q.shift();

    for (let i = 0; i < graph[x].length; i++) {
      const target = graph[x][i];
      if (visited[target] > visited[x] + 1) {
        visited[target] = visited[x] + 1;
        q.push(target);
      }
    }
  }

  for (let i = 0; i < visited.length; i++) {
    if (visited[i] === Infinity) visited[i] = -Infinity;
  }
  const max = Math.max(...visited);

  for (let x of visited) {
    if (x === max) answer++;
  }
  return answer;
}
