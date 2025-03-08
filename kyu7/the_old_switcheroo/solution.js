function vowel2index(str) {
    const vowels='aeiou'
    let result=''
    for (let i=0;i<str.length;i++){
      if (vowels.indexOf(str[i].toLowerCase())!=-1) {
        result+=i+1
      } else {
        result+=str[i]
      }
    }
   return result
 }
 