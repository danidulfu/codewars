function countLettersAndDigits(input) {
    let numerable='abcdefghijklmnopqrstuvwxyz1234567890'
    let count=0
    for (let i=0;i<input.length;i++){
      if (numerable.indexOf(input[i].toLowerCase())!=-1) {
        count++
      }
    }
    return count
  }