var encryptThis = function(text) {
    return text.split(' ')
        .map(word=>{ 
              let temp=''
              if (word.length==1)
                  {temp=word.charCodeAt(0)}
                else if (word.length==2) {
                  temp=word.charCodeAt(0)+word[1]
                } else
                temp=word.charCodeAt(0)+word[word.length-1]+word.slice(2,word.length-1)+word[1]
              return word=temp})
        .join(' ')  
  }