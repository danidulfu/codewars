function smallEnough(a, limit){
    return a.sort((a,b)=>b-a)[0]<=limit
  }