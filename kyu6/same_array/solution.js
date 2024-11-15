function same(aArr, bArr)
{
  function makeComparable(arr){
    return arr.map((a)=> a.sort()).sort().toString()
  }
  
  return makeComparable(aArr)==makeComparable(bArr)
}