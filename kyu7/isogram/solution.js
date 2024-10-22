function isIsogram(str){
    let s=str.toLowerCase().split('').sort().join('')
    for (let i=0;i<s.length-1;i++){
      if (s[i]===s[i+1]) {return false}
    }
    return true
  }