function solution(participant, completion) {
  var answer = "";
  const list = new Map();

  for (let people of participant) {
    list.set(people, (list.get(people) || 0) + 1);
  }

  for (let del of completion) {
    const count = list.get(del);
    if (count - 1 === 0) {
      list.delete(del);
    } else {
      list.set(del, count - 1);
    }
  }

  for (let [key, value] of list) answer = key;
  return answer;
}
