function wordsToMarks(string){
    return string.split('').reduce((acc,current)=>acc+current.charCodeAt()-96,0) 
  }