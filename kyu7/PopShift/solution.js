function popShift(s){
    let result=['','','']
    let arr=s.split('')
    while (arr.length>1) {
      result[0]+=arr.pop()
      result[1]+=arr.shift()
    }
    result[2]=arr[0] || ''
    return result
  }