function dirReduc(plan) {
    var opposite={
      'NORTH':'SOUTH',
      'SOUTH':'NORTH',
      'EAST':'WEST',
      'WEST':'EAST'
    }
    
    return plan.reduce(function(directions, direction){
      if (directions[directions.length-1]===opposite[direction])
        directions.pop()
      else
        directions.push(direction)
      return directions
    },[])
  }