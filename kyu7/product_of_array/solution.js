function productArray(numbers){
  let result=[]
  for (let i=0;i<numbers.length;i++){
    let product=1
    for (let j=0;j<numbers.length;j++) {
      if (j!=i) {
        product*=numbers[j]
      }
    }
    result.push(product)
    }
  return result
}

//and now the very obvious (to others) one line solution

function productArray(numbers){
  return numbers.map(x => numbers.reduce((acc,n) => acc*n)/x)
}