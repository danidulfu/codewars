function capitalize(s){
    let result=['','']
    for (let i=0;i<s.length;i++)
      if (i%2==0) {
        result[0]+=s[i].toUpperCase()
        result[1]+=s[i]}
      else {
        result[0]+=s[i]
        result[1]+=s[i].toUpperCase()
      }
    return result
  };