function nbDig(n, d) {
    let count=0
    for (let i=0;i<=n;i++){
      let str=(i**2).toString()
      for (let j=0;j<str.length;j++){
        if (str[j]==d) count++
      }
    }
    return count
  }