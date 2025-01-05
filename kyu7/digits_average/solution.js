function digitsAverage(input) {
    input=input.toString().split('')
    while (input.length!=1) {
      for (let i=0;i<input.length-1;i++){
        input[i]=Math.ceil((Number(input[i])+Number(input[i+1]))/2)
      }
      input.pop()
    }
    return Number(input[0])
  }