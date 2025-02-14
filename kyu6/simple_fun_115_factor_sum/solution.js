function factorSum(n) {
    function sum(n){
      for (let i=2;i<n;i++){
        if (n%i==0) return i+sum(n/i)
      }
      return n
    }
  
    let temp=sum(n)
    while (temp!=sum(temp)){
      temp=sum(temp)
    }
    return temp
  }