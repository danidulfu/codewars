
function correct(string)
{
  let s=string.split('')
  for (let i=0;i<s.length;i++) {
    if (s[i]==='1') {s[i]='I'} else
      if (s[i]==='0') {s[i]='O'} else
        if (s[i]==='5') {s[i]='S'}
  }
  return s.join('')
}