function minValue(values){
    return parseInt(Array.from(new Set(values)).sort((a,b)=>a-b).join(''))
  }