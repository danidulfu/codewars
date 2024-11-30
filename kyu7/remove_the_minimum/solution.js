function removeSmallest(numbers) {
    let min=numbers[0];
    for (let i=1;i<numbers.length;i++) {
      if (min>numbers[i]) min=numbers[i]
    }
    return numbers.filter((element, index, arr)=> index!=arr.indexOf(min))
  }

// function removeSmallest(numbers) {
//     let min=numbers[0]
//     for (let i=1;i<numbers.length;i++){
//       if (numbers[i]<min) {min=numbers[i]}
//     }
//     let result=[]
//     for (let i=0;i<numbers.length;i++){
//       if (i!=numbers.indexOf(min)) result.push(numbers[i])
//     }
//     return result
//   }

  