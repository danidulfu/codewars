function encode(string) {
  let vowels='aeiou'
  let temp=''
  for (let i=0;i<vowels.length;i++){
    temp=string.replaceAll(vowels[i],(i+1).toString())
    string=temp
  }
  return string
}

function decode(string) {
  let vowels='aeiou'
  let temp=''
  for (let i=0;i<vowels.length;i++){
    temp=string.replaceAll((i+1).toString(),vowels[i])
    string=temp
  }
  return string
}