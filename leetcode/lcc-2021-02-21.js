function brokenCalc (X, Y) {
  if (X > Y) return X-Y;
  if (X==Y) return 0;
  if (Y%2 == 0) return brokenCalc(X, Y/2) + 1;
  return brokenCalc(X, Y+1) + 1;
}
