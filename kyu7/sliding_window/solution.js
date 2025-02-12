function window(length,offset,list) {
    let result=[]
    for (let i=0;i<=list.length;i+=offset){
      let tempList=list.slice(i,i+length)
      if (tempList.length===length) 
        {result.push(tempList)}
      }
    return result;
  }
  