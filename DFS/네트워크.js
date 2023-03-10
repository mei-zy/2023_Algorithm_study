function solution(n, computers) {
  var answer = 0;
  const visited = Array(n).fill(false);

  const dfs = (i) => {
    visited[i] = true;

    for (let j = 0; j < n; j++) {
      if (computers[i][j] && !visited[j]) dfs(j);
    }
  };

  for (let i = 0; i < computers.length; i++) {
    if (!visited[i]) {
      dfs(i);
      answer++;
    }
  }
  return answer;
}
