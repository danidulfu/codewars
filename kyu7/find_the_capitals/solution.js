var capitals = function (word) {
	let result=[]
  for (let i=0;i<word.length;i++){
    if ((word[i]>='A')&&(word[i]<='Z')) {
      result.push(i)
    }
  }
  return result
};