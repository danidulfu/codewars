function disemvowel(str) {
    let vowels='aeiou'
    return str.split('').filter(letter=>vowels.indexOf(letter.toLowerCase())==-1).join('')
  }