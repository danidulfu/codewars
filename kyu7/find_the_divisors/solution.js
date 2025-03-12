function divisors(integer) {
    let divisors=[]
    for (let i=2;i<=Math.floor(integer/2);i++){
      if (integer%i==0) {
        divisors.push(i)
      }
    }
    return divisors.length==0 ? `${integer} is prime` : divisors
  }