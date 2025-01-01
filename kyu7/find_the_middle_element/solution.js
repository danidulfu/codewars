function gimme (triplet) {
    let duplicate=[...triplet]
    duplicate.sort((a,b)=>a-b)
    return triplet.indexOf(duplicate[1])
  }