function orderWord(s){
    if ((s===null)||(s=='')) return "Invalid String!"
    else return s.split('').sort().join('')
  }