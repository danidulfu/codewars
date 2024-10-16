// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

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