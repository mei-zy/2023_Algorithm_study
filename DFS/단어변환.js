function solution(begin, target, words) {
  var answer = Infinity;
  const visited = Array(words.length).fill(0);

  const check = (current, word) => {
    let diff = 0;
    for (let i = 0; i < word.length; i++) {
      if (word[i] !== current[i]) diff++;
    }

    if (diff === 1) return true;
    return false;
  };

  const dfs = (visited, current, L) => {
    if (current === target) {
      if (answer > L) answer = L;
    }
    if (L === words.length) return;

    for (let i = 0; i < words.length; i++) {
      if (!visited[i] && check(current, words[i])) {
        let ref = [...visited];
        ref[i] = 1;
        dfs(ref, words[i], L + 1);
      }
    }
  };

  dfs(visited, begin, 0);

  if (answer === Infinity) return 0;
  return answer;
}
