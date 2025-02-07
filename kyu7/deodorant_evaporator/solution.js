function evaporator(content, evap_per_day, threshold){ 
    let day=0
    let thresh=content*threshold/100
    while (content>thresh){
      content=content-evap_per_day*content/100
      day+=1
    }
    return day;
  }