function removeExclamationMarks(s) {
    return s.split('').filter(letter=>letter!='!').join('');
  }