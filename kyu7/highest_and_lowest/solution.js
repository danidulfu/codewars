    function highAndLow(numbers){
        let nums=numbers.split(' ').map(x=>+x).sort((a,b)=>a-b)
        return `${nums[nums.length-1]} ${nums[0]}`
    }

  function highAndLow(numbers){
    let nums=numbers.split(' ').map(x=>+x)
    return `${Math.max(...nums)} ${Math.min(...nums)}`
  }