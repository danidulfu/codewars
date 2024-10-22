// first solution:
function solution(str, ending){
    return (str.indexOf(ending)!=-1)&&(str.indexOf(ending)!=str.length-ending.length-1)
  }

//   second solution, after doing a bit of reading

function solution(str, ending){
    return str.endsWith(ending)
  }