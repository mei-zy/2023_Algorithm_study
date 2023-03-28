// 문제 풀이 방법
// abcdefg .. 를 나열해서 그 위치에 있는 것과 교환해준다.

const solution = (alpha, words) => {
  let answer = [];
  const corr = "abcdefghijklmnopqrstuvwxyz";

  let tmp = [];

  const convertItem = (word, direction = true) => {
    let answer = "";

    if (direction) {
      for (let i = 0; i < word.length; i++) {
        const target = word[i];

        const index = alpha.indexOf(target);
        answer += corr[index];
      }
    } else {
      for (let i = 0; i < word.length; i++) {
        const target = word[i];

        const index = corr.indexOf(target);
        answer += alpha[index];
      }
    }

    return answer;
  };

  for (let word of words) {
    const target = convertItem(word);
    tmp.push(target);
  }

  tmp.sort();

  for (let target of tmp) {
    const base = convertItem(target, false);
    answer.push(base);
  }

  console.log(answer);
};

solution("pjcadbeofglkxzymnqsvutwihr", [
  "javascript",
  "python",
  "go",
  "lang",
  "java",
]);

// python, java, javascript, go, lang
