function revrot(str, sz) {
    if ((sz<=0)||(str=='')||(sz>str.length)) return ''
      let chunks=[]
      for (let i=0, initlength=str.length;i<initlength;i+=sz){
        chunks.push(str.substring(i,i+sz))
      }
      chunks.pop()
      for (let i=0;i<chunks.length;i++){
          let temp=chunks[i].split('')
          let sum = temp.reduce((acc, element)=>acc+Number(element),0)
          if (sum%2==0) {
            temp.reverse()
          } else {
            temp.push(temp[0])
            temp.shift()
          }
          chunks[i]=temp.join('')
      }
      return chunks.join('')
    
    }