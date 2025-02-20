function getPercentage(sent, limit){
    if (sent==0) {
      return "No e-mails sent"
    } else if (limit) {
      if (sent>=limit) {
        return "Daily limit is reached"}
       else return `${Math.floor(sent/limit*100)}%`
    } else return `${Math.floor(sent/1000*100)}%`
  }