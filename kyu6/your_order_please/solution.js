function order(words){
    let arrayed=words.split(' ')
    let result=[]
    for (let i=1;i<=arrayed.length;i++){
      for (let j=0;j<arrayed.length;j++){
        if (arrayed[j].indexOf(i)!=-1) {
          result.push(arrayed[j])
          break}
      }
    }
   return result.join(' ')
  }