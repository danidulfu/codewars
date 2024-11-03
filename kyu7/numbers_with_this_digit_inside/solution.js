function numbersWithDigitInside(x, d) {
    let result=[0,0,1];
    for (let i=1;i<=x;i++){
      if (i.toString().indexOf(d.toString())!=-1) {
        result[0]++
        result[1]+=i
        result[2]*=i
      }
    }
    return result[0]==0 ? [0,0,0] : result
  }