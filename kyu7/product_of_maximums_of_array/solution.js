function maxProduct(numbers, size){
    let sorted=numbers.sort((a,b)=>b-a)
    let product=1
    for (let i=0;i<size;i++)
      product*=sorted[i]
    return product
  }

  //alternative solution, one liner

  function maxProduct(numbers, size){
    return numbers.sort((a,b)=>b-a).slice(0,size).reduce((acc,n)=>acc*n)
   }