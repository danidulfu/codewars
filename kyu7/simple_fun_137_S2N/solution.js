function S2N(m, n) {
  let sum=0
  for (i=0;i<=m;i++){
    for (j=0;j<=n;j++) {
      sum+=Math.pow(i,j)
    }
  }
  return sum
}