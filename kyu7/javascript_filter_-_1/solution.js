function searchNames( logins ){
    return logins.filter(pair=>pair[0][pair[0].length-1]==="_")
  }