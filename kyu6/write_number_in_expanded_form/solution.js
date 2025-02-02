function expandedForm(num) {
    let result=[]
    let stringified=num.toString()
    for (let i=0;i<stringified.length;i++){
      let digit=Number(stringified[i])
      if (digit!=0)
        {result.push(digit*Math.pow(10,stringified.length-i-1))}
    }
    return result.join(' + ')
    }