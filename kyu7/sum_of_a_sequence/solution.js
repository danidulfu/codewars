const sequenceSum = (begin, end, step) => {
    if (end<begin) 
      {return 0} else
        {
          let sum=0
          for (let i=begin;i<=end;i+=step) {
            sum+=i
          }
          return sum
        }
  };