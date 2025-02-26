function momentOfTimeInSpace(moment) {
    let digits=[]
    digits=moment.split('').filter(element=>(element>=1&&element<=9))
    let sumDigits=digits.reduce((acc,el)=>acc+Number(el),0)
    if (sumDigits>moment.length-digits.length) {
      return [false, false, true]
    } else if(sumDigits<moment.length-digits.length){
      return [true, false, false]
    } else return [false, true, false]
  }