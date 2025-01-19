function flattenAndSort(array) {
    let result=[]
    array.map(element => element.map(subelement=>result.push(subelement)))
    return result.sort((a,b)=>a-b)
  }