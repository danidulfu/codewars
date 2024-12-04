function replace(s){
    let vowels='aeiou'
    for (let i=0;i<vowels.length;i++) {
      s=s.replaceAll(vowels[i],'!')
      s=s.replaceAll(vowels[i].toUpperCase(),'!')
    }
    return s
  }