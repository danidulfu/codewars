function mergeArrays(arr1, arr2) {
    let result=new Set(arr1.concat(arr2))
    return Array.from(result).sort((a,b)=>a-b)
    }