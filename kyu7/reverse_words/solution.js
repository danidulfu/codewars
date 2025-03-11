function reverseWords(str) {
    return str.split(' ').map(el=>{
      return el.split('').reverse().join('')
    }).join(' ')
  }