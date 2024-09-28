

function rot13(message){
    let alphabet='abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz'
    let code=''
    for (let i=0;i<message.length;i++){
      if (alphabet.indexOf(message[i])!=-1) {
        code+=alphabet[(alphabet.indexOf(message[i])+13)]
      } else
        if (alphabet.indexOf(message[i].toLowerCase())!=-1) {
          code+=alphabet[(alphabet.indexOf(message[i].toLowerCase())+13)].toUpperCase()
        } else
          code+=message[i]
    }
    return code
  }