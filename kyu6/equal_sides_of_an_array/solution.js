function findEvenIndex(arr)
{
 for (let i=0;i<arr.length;i++){
     let sumA=arr.slice(0,i+1).reduce((acc,el)=>acc+el,0)
     let sumB=arr.slice(i,arr.length).reduce((acc, el)=>acc+el,0)
     if (sumA==sumB) return i
   }
  return -1
}