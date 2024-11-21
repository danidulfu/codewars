function findOdd(a) {
    let count={  }
    for (let i=0;i<a.length;i++) {
      count[a[i]] ? count[a[i]]++ : count[a[i]]=1
    }
    for (element in count) {
      if (count[element]%2==1) return Number(element)
    }
      
    }