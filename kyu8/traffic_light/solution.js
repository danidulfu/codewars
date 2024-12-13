function updateLight(current) {
    let order=['green','yellow','red']
    return order[(order.indexOf(current)+1)%3]
  }