const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const stdin = [];

rl.on('line', (line) => {
  stdin.push(line.trim());
});

rl.on('close', () => {
  const N = parseInt(stdin[0]);
  
  // 이후에 필요한 작업을 수행

  console.log(N <= 1e5 && N % 2024 === 0 ? 'Yes' : 'No')
});