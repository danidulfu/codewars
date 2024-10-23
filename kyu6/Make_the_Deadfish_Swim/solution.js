function parse( data )
{
  let result=[]
  let num=0
  for (let i=0;i<data.length;i++){
    if (data[i]=='i') {
      num+=1
      console.log(num)
    } else if (data[i]=='d') {
      num-=1
      console.log(num)
    } else if (data[i]=='s') {
      num=num**2
      console.log(num)
    } else if (data[i]=='o'){
      result.push(num)
    }
  }
  return result 
}
