function accum(s) {
	let output=''
  for (let i=0;i<s.length;i++){
    let temp=''
    for (let j=1;j<=i+1;j++){
      if (j==1) {
        temp+=s[i].toUpperCase()
      } else
        temp+=s[i].toLowerCase()
    }
    output=output+temp+'-'
  }
  return output.slice(0,-1)
}