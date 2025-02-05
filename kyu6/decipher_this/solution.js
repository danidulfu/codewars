function decipherThis(str) {
    return str.split(' ')
                .map(word=>{
                     let temp=''
                     let firstLetter=word.split('').filter(digit=>digit>='0'&&digit<='9').join('')
                     if (word.length==firstLetter.length) {
                       return String.fromCharCode((Number(firstLetter)))
                     } else
                         if (word.length==firstLetter.length+1) {
                           return String.fromCharCode(Number(firstLetter))+word[word.length-1]
                     } else
                       {temp=String.fromCharCode(Number(firstLetter))+word[word.length-1]+word.slice(firstLetter.length+1,word.length-1)+word[firstLetter.length]}
                     return temp
    } ).join(' ')
   }