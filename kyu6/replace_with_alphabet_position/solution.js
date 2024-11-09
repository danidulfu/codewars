function alphabetPosition(text) {
    let alphabet='abcdefghijklmnopqrstuvwxyz'
    let result=[]
    for (let i=0;i<text.length;i++){
      if (alphabet.indexOf(text[i].toLowerCase())!=-1) {result.push(alphabet.indexOf(text[i].toLowerCase())+1)}
    }
    return result.join(' ');
  }