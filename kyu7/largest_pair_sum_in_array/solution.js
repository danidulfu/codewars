function largestPairSum (numbers) {
    let maxSum=numbers[0]+numbers[1]
    for (let i=0;i<numbers.length;i++){
      for (let j=i+1;j<numbers.length;j++){
        if (maxSum<numbers[i]+numbers[j]) {
          maxSum=numbers[i]+numbers[j]
        }
      }
    }
    return maxSum
  }