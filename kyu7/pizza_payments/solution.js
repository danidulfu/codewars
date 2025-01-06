function michaelPays(costs) {
    if (costs<5) {
      return Number(costs.toFixed(2))
    } else {
      let third=costs/3
      if (third<10)       
        return Number((2*third).toFixed(2))
       else return Number((costs-10).toFixed(2))
    }
    return Number(costs.toFixed(2))
  }