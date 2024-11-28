function persistence(num) {
    let counter=0
    while (num>9){
        let dec=num.toString().split('')
        console.log(dec)
        num=dec.reduce((acc,num)=>acc*parseInt(num))
        console.log(num)
        counter++
     }
    return counter
  }