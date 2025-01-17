function sumDigits(number) {
    return Math.abs(number).toString().split('').reduce((acc,dig)=>acc+Number(dig),0)
  }  