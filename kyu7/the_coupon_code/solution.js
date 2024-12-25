function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
    currentDate=new Date(currentDate)
    expirationDate=new Date(expirationDate)
    return ((enteredCode===correctCode)&&(currentDate<=expirationDate))
  }