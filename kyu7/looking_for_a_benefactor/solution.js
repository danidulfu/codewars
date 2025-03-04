function newAvg(arr, newavg){
    const newDonation = newavg * (arr.length + 1) - arr.reduce((a,b) => a + b,0)
    if(newDonation <= 0) throw 'Expected New Average is too low'
    return Math.ceil(newDonation)
  }