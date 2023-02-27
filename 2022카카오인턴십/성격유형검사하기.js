function solution(survey, choices) {
  var answer = "";

  const map = new Map();
  const seqs = ["RT", "CF", "JM", "AN"];

  for (let seq of seqs) {
    const [a, b] = seq.split("");
    map.set(seq, { [a]: 0, [b]: 0 });
  }

  for (let i = 0; i < survey.length; i++) {
    const [a, b] = survey[i].split("");
    const target = [a, b].sort().join("");
    const curr_score = map.get(target);
    const score = choices[i];

    if (score === 4) continue;
    else if (score <= 3) {
      switch (score) {
        case 1:
          curr_score[a] += 3;
          break;
        case 2:
          curr_score[a] += 2;
          break;
        case 3:
          curr_score[a] += 1;
          break;
        default:
          break;
      }
    } else {
      curr_score[b] += score - 4;
    }
    map.set(target, curr_score);
  }

  for (let seq of seqs) {
    const item = map.get(seq);
    const [a, b] = seq.split("");

    const [aScore, bScore] = [item[a], item[b]];

    if (aScore >= bScore) answer += a;
    else answer += b;
  }
  return answer;
}
