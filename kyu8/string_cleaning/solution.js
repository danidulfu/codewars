function stringClean(s){
    return s.split('').filter(element => (element<'0')||(element>'9')).join('')
  }