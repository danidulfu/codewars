//elegant, one liner:
function minMax(arr){
    return [Math.min(...arr),Math.max(...arr)]; // fix me!
  }

//less elegant, but still works
function minMax(arr){
    if (arr.length==1) {
      return [arr[0],arr[0]]
    } else {
      let min=arr[0]
      let max=arr[0]
      for (let i=0;i<arr.length;i++){
        if (min>arr[i]) {min=arr[i]}
        if (max<arr[i]) {max=arr[i]}
      }
      return [min,max]
    }   
  }