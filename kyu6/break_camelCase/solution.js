function solution(string) {
    let s=''
    for (let i=0;i<string.length;i++){
      if (string[i].toUpperCase()==string[i]) {
        s+=' '+string[i]
      }
        else s+=string[i]}
    return s
  }