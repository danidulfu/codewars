

function points(games) {
    let points=0
    games.forEach(game => {
    if (game[0]>game[2]) {points+=3}
      else if (game[0]==game[2]) {points+=1}
    })
    return points
  }