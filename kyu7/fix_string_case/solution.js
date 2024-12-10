function solve(s){
    let uppercaseCount=0
    let lowercaseCount=0
    for (let i=0;i<s.length;i++){
      if (s[i].toUpperCase()==s[i]) {uppercaseCount+=1}
      else {lowercaseCount+=1}
    }
    return lowercaseCount<uppercaseCount ? s.toUpperCase() : s.toLowerCase()
  }