function removeUrlAnchor(url){
    if (url.indexOf("#")!=-1)
     {return url.slice(0,url.indexOf('#'))}
    else return url
  }