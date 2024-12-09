function reverseLetter(str) {
    let alphabet='abcdefghijklmnopqrstuvwxyz'
    return str.split('').reverse().filter(letter => alphabet.indexOf(letter)!=-1).join('')
  }