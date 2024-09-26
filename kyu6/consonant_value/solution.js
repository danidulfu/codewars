function solve(s) {
  let vowels=['a','e','i','o','u']
  let temporaryString=''
  let letters='abcdefghijklmnopqrstuvwxyz'
  for (let i=0;i<s.length;i++) {
    if (vowels.indexOf(s[i])==-1){
      temporaryString+=s[i]
    } else temporaryString+=' '
  }
  let maxSum=0
  let substrings=temporaryString.split(' ')
  for (let i=0;i<substrings.length;i++) {
    let sum=substrings[i].split('').reduce((accumulator,char)=>accumulator+(letters.indexOf(char)+1),0)
    if (sum>maxSum) {maxSum=sum}
    }
  
  return maxSum;
};