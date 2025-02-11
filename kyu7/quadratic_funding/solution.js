function qf(donations, pool) {
    let received = [];
    let weights=[]
    function weight(arr) {
      return Math.round(Math.pow(arr.reduce((acc,el)=>acc+Math.sqrt(el),0),2))
    }
    for (let i=0;i<donations.length;i++){
      weights.push(weight(donations[i]))
    }
    let totalWeight=weights.reduce((acc, el)=>acc+el,0)
    for (let i=0;i<donations.length;i++){
      received.push(Math.round(pool*weights[i]/totalWeight))
    }
  
    return received
  }