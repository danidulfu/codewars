function oddOrEven(array) { 
    if (array.length==0) return "even"
    else
      return array.reduce((acc,num)=>acc+num)%2 != 0 ? "odd" : "even"
  }