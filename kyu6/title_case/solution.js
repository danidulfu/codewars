function titleCase(title, minorWords) {
    minorWords=typeof minorWords==="undefined" ? [] : minorWords.toLowerCase().split(' ')
    return title.toLowerCase().split(' ').map (function (word, index){
      if ((word!='')&&((index===0)||minorWords.indexOf(word)===-1)) {
        word=word[0].toUpperCase()+word.slice(1)
      }
      return word
    }).join(' ')
  }
  