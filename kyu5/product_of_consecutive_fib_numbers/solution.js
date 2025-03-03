function productFib(prod){
    let f=[0,1]
    let i=1
    while (f[i]*f[i-1]<=prod){
      if (f[i]*f[i-1]==prod)
        {return [f[i-1],f[i],true]}
      else 
      { i++
        f[i]=f[i-1]+f[i-2]}
    }
  return [f[i-1],f[i],false]
  }