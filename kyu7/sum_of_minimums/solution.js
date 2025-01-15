function sumOfMinimums(arr) {
    return arr.reduce ((acc, current) => acc+Math.min(...current),0)
  }