function sumtheDifference(equation) {
    let done=false
    let oddSum=0
    let evenSum=0
    while (!done){
      if (equation!=equation.replace(' ',''))
        equation=equation.replace(' ','')
      else done=true
    }
    for (let i=0;i<equation.length;i++) {
      let character=Number(equation[i])
      if (!isNaN(character)){
        console.log(evenSum,oddSum)
        if (i==0){
          character%2==0 ? evenSum+=character : oddSum+=character
        } else if (equation[i-1]=='-'){
          character%2==0 ? evenSum-=character : oddSum-=character
        } else {
          character%2==0 ? evenSum+=character : oddSum+=character
        }
      }
  }
    return evenSum-oddSum
    
  }