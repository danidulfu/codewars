function validateBase(num, base) {
    if (base<2&&base>36) return false
      else {
        let digits=num.split('')
        for (digit of digits){
          if (parseInt(digit)>=base) return false
           else {
             let code=65+base-10
                 if (digit.charCodeAt(0)>=code) return false}
        }
      }
    return true
  }