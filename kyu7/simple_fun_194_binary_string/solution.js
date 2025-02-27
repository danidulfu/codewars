function binStr(s) {
    let count=0
    function flip(arr, index, length){
      for (let i=index;i<length;i++)
        if (arr[i]=='1') {
          arr[i]='0'
        } else {arr[i]='1'}
      s=arr.join('')
    }
  for (let i=0;i<s.length;i++){
    let sum=s.split('').reduce((acc,el)=>acc+Number(el),0)
    if (sum==0) {return count}
      else if (s[i]=='1') {
        flip(s.split(''),i,s.length)
        count+=1
      }
  }
  return count
    }