function checkExam(array1, array2) {
    let result=0
    for (let i=0;i<array1.length;i++){
      if (array2[i]!=='') {
        if (array1[i]==array2[i]) {result+=4}
          else {result-=1}
      }
    }
    return result>0 ? result : 0
   }