const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on('line', (line) => {
  input.push(line.trim());
});

rl.on('close', () => {
  const T = parseInt(input[0]);
  
  for (let i = 1; i <= T; i++) {
    const [N, M] = input[i].split(' ').map(Number);
    // 이후 각 테스트 케이스에 대한 처리를 작성합니다.

    const dp = Array.from(
      Array(N),
      () => Array(M).fill(-1)
    );

    const sol = (i, j) => {
      if(i === N) {
        return 1;
      }

      if(j !== -1 && dp[i][j] !== -1) {
        return dp[i][j];
      }

      let ret = 0;

      for(let k = j + 1; k < M; k++) {
        ret += sol(i + 1, k);
      }

      return (dp[i][j] = ret);
    }

    console.log(sol(0, -1));
  }
});