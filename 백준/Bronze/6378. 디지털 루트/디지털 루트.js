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
  for (let i = 0; i < stdin.length; i++) {
    let num = stdin[i];
    
    if (num === '0') {
      break;
    }

    while(num.length > 1) {
      num = num.split('').reduce((a, c) => a + (+c), 0).toString();
    }
    
    console.log(num);
  }
});