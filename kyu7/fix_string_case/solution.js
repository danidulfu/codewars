function solve(s){
    let uppercaseCount=0
    let lowercaseCount=0
    for (let i=0;i<s.length;i++){
      if (s[i].toUpperCase()==s[i]) {uppercaseCount+=1}
      else {lowercaseCount+=1}
    }
    let result=''
    if (lowercaseCount<uppercaseCount){
      for (let i=0;i<s.length;i++){
        if (s[i].toLowerCase()==s[i]) {
          result+=s[i].toUpperCase()
        } else result+=s[i]
      }
      return result
    } else {
      for (let i=0;i<s.length;i++){
        if (s[i].toUpperCase()==s[i]) {
          result+=s[i].toLowerCase()
        } else result+=s[i]
      }
      return result
    }
  }