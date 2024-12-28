function findUniq(arr) {
    let simplified=new Set(arr)
    let uniques=Array.from(simplified)
    if (arr.indexOf(uniques[0])==arr.lastIndexOf(uniques[0])) {
      return uniques[0]
    } else return uniques[1]
  }
  