function squarePi(digits){
    let pi='31415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679'
    let sum=0
    for (let i=0;i<digits;i++){
      sum+=Number(pi[i])**2
    }
    return Math.ceil(Math.sqrt(sum))
  }