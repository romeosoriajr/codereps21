function arrangeCoins(n) {
  let level = 0;

  while (n >= 0) {
    if (level + 1 > n) break;
    level++;
    n -= level;
  }

  return level;
}

