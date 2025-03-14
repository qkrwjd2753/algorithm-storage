import sys
import math
input = sys.stdin.readline

T = int(input())
for _ in range(T):
  n = int(input())

  run = 0

  for j in range(1, n + 1):
    cnt = 0;

    if j == 1:
      cnt += 1
    else:
      for i in range(1, int(math.sqrt(j)) + 1):
        if j % i == 0:
          if i * i == j:
            cnt += 1;
          else:
            cnt += 2;


    if cnt % 2 == 1:
      run += 1
      
  print(run);