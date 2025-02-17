function gps(s, x) {
  let max=0;
  for (let i=1;i<x.length;i++){
    let speed=Math.floor((x[i]-x[i-1])*3600/s)
    if (speed>max)
      max=speed
  }
  return max
}
