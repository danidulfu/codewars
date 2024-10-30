function pairZeros(arr) {
    let result=[]
    let seen=0
    for (let i=0;i<arr.length;i++){
      if (arr[i]!=0) {
        result.push(arr[i])
      } else 
        if (seen==0) {
          result.push(arr[i])
          seen++
        } else 
          if (seen!=0) {
          seen--
        }
    }
    return result
  }