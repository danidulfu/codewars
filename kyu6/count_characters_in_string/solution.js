function count(string) {
    let result={}
    let alphabet='abcdefghijklmnopqrstuvwxyz'
    if (string=='') return {}
      else
        {for (let i=0;i<alphabet.length;i++){
          for (let j=0;j<string.length;j++){
            if ((string[j].toLowerCase()===alphabet[i])||(string[j]===alphabet[i])) 
            { if (Object.hasOwn(result, string[j]))
              result[string[j]]+=1 
             else result[string[j]]=1
            }
          }}
    }
    return result;
  }