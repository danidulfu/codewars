function learnCharitableGame(arr) {
    let sumOfBets=arr.reduce((acc, bet)=>acc+bet)
    if (sumOfBets==0) {return false}
      else if (!Number.isInteger(sumOfBets/arr.length)) {return false}
        else return true
  }