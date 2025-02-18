function salePrice(cost){
    let profit=15
    function setPrice(price){
      price=Math.round(price+price*profit/100)
      if (price%10==0||price%10==5){
        return price
      } else if (price%10<5) {
        return Math.floor(price/10)*10+5}
      else if (price%10>=5){
        return Math.ceil(price/10)*10
      }
    }
    let separated=cost.split('\n')
    let result=[]
    for (let i=0;i<separated.length;i++){
      let temp=separated[i].split('$')
      temp[1]=setPrice(Number(temp[1]))
      result.push(temp.join('$'))
    }
    return result.join('\n').replaceAll('cost','sale')
  }