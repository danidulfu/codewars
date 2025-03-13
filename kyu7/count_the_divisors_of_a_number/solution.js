function getDivisorsCnt(n){
    let divisors=0
    for (let i=1;i<=Math.floor(Math.sqrt(n));i++){
      if (n%i==0){
        divisors++
        if (i!=n/i) {
          divisors++
        }
      }
    }
    return divisors
  }