function expandedForm(num) {
  let arrayed=num.toString().split('.')
  let result=[]

// write a function to expand the whole of the number

  function whole(input){
    let partial=[]
    for (let i=0;i<input.length;i++){
      if (input[i]!=0) {
        partial.push(Number(input[i])*Math.pow(10,input.length-i-1))
      }
    }
    return partial.join(' + ')
  }

// write a function to expand the fractional part

  function fraction(input) {
    let partial=[]
    for(let i=0;i<input.length;i++){
      if (input[i]!=0)
        partial.push(`${input[i]}/${Math.pow(10,i+1)}`)
    }
    return partial.join(' + ')
  }

// combine the two to get result

  return arrayed[0] != 0 ? whole(arrayed[0])+' + ' + fraction(arrayed[1]) : fraction(arrayed[1])
}