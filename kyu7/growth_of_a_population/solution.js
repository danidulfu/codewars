function nbYear(p0, percent, aug, p) {
    let counter=0
    let actual=p0
    while (actual<p) {
      actual = actual + Math.floor(actual*percent/100) + aug
      counter++
    }
    return counter
    }