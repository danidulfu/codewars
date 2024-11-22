function findAverage(array) {
    return array.length==0 ? 0 : array.reduce((accumulator,element)=>accumulator+element)/array.length
  }