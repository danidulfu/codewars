function partlist(arr) {
    let result=[]
    for (let i=0;i<arr.length-1;i++)
      {let a=arr.slice(0,i+1)
      let b=arr.slice(i+1,arr.length)
      result.push([a.join(' '),b.join(' ')])}
    return result
  }