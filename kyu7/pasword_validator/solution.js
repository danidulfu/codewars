function password(str) {
    let upper = false
    let lower = false
    let number = false
    
    for (let i=0;i<str.length;i++){
      upper = upper ? upper : str.charAt(i)>='A'&&str.charAt(i)<='Z'
      lower = lower ? lower : str.charAt(i)>='a'&&str.charAt(i)<='z'
      number = number ? number : str.charAt(i)>='0'&&str.charAt(i)<=9
    }
    
    return upper&&lower&&number&&str.length>=8
  }